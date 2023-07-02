import { useEffect, type FC, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Form, Input, Space, message } from "antd";
import {
    useLoad,
    usePatchRequest,
    usePostRequest,
    usePutRequest,
} from "../../../hooks/request";
import { UserDataI } from "../../../utils/types";
import { postsPostUrl, postsPutUrl, usersGetUrl } from "../../../utils/url";
import { formInput, formLabel } from "../../../utils/utils";
import { PostFormValuesI, PostsFormProps } from "./types";

const PostsForm: FC<PostsFormProps> = ({
    item = null,
    userData,
    onClose,
    request,
}) => {
    const postRequest = usePostRequest({
        url: postsPostUrl(item?.id),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const putRequest = usePatchRequest({
        url: postsPutUrl(item?.id),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const { response } = useLoad({ url: usersGetUrl });
    const [userId, setUserId] = useState<string>(userData.id.toString());
    const [form] = Form.useForm();

    const handleChange = (event: SelectChangeEvent) => {
        setUserId(event.target.value as string);
    };

    const onFinish = async (values: PostFormValuesI) => {
        try {
            if (item !== null) {
                await putRequest.request({
                    data: JSON.stringify({
                        title: values.title,
                        body: values.body,
                        userId: Number(userId),
                    }),
                });
                await request();
                onClose();
            } else {
                await postRequest.request({
                    data: JSON.stringify({
                        title: values.title,
                        body: values.body,
                        userId: Number(userId),
                    }),
                });
                await request();
                onClose();
            }
            message.success("Success!");
        } catch (error) {
            message.error("Something went wrong!");
        }
    };

    const onFinishFailed = ({ errorFields }: { errorFields: any }) => {
        return message.error(errorFields[0].errors[0]);
    };

    useEffect(() => {
        if (item !== null) form.setFieldsValue(item);
    }, []);

    return (
        <>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                <Space
                    style={{ display: "flex", flexDirection: "column" }}
                    size={15}
                >
                    <Form.Item {...formLabel("Title", "title")}>
                        <Input {...formInput("title")} />
                    </Form.Item>
                    <Form.Item {...formLabel("Body", "body")}>
                        <Input {...formInput("body")} />
                    </Form.Item>
                </Space>
                <Box mt={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-select-small-label">
                            User Id
                        </InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={userId}
                            label={"User Id"}
                            onChange={handleChange}
                        >
                            {response?.map((item: UserDataI) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    pt={4}
                    display={"flex"}
                    justifyContent={"flex-end"}
                    flexDirection={"column"}
                    rowGap={1}
                >
                    <Button
                        htmlType="reset"
                        type="default"
                        block
                        loading={postRequest.loading || putRequest.loading}
                    >
                        Reset
                    </Button>
                    <Button
                        htmlType="submit"
                        type="primary"
                        block
                        loading={postRequest.loading || putRequest.loading}
                    >
                        {item !== null ? "Edit" : "Submit"}
                    </Button>
                </Box>
            </Form>
        </>
    );
};

export default PostsForm;
