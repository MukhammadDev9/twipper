import { useEffect, type FC } from "react";
import { Box } from "@mui/material";
import { Button, Form, Input, Select, Space, message } from "antd";
import { useLoad, usePostRequest, usePutRequest } from "../../../hooks/request";
import { UserDataI } from "../../../utils/types";
import { postsPostUrl, postsPutUrl, usersGetUrl } from "../../../utils/url";
import { formInput, formLabel } from "../../../utils/utils";
import { PostsFormProps } from "./types";

const PostsForm: FC<PostsFormProps> = ({ item = null, userData, onClose }) => {
    const postRequest = usePostRequest({ url: postsPostUrl });
    const putRequest = usePutRequest({ url: postsPutUrl(userData.id) });
    const { response } = useLoad({ url: usersGetUrl });
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        if (item !== null) {
            await putRequest.request({
                body: values,
            });
            onClose();
        } else {
            await postRequest.request({
                data: values,
            });
            onClose();
        }
        message.success("Success!");
    };

    const onFinishFailed = ({ errorFields }: { errorFields: any }) => {
        if (errorFields[0].name[0] === "image") {
            return message.error("Please upload Image!");
        } else {
            return message.error(errorFields[0].errors[0]);
        }
    };

    useEffect(() => {
        if (item !== null) form.setFieldsValue(item);
    }, []);

    return (
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
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
                <Form.Item {...formLabel("User Id", "userId")} initialValue={0}>
                    <Select size="middle">
                        <Select.Option value={userData.id}>
                            {userData.name}
                        </Select.Option>
                        {response?.map((item: UserDataI) => (
                            <Select.Option key={item.phone} value={item.id}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Space>
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
    );
};

export default PostsForm;
