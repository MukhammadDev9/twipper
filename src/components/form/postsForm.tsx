import { useEffect, type FC } from "react";
import { Button, Form, Input, Space, message } from "antd";
import { usePostRequest, usePutRequest } from "../../hooks/request";
import { postsPostUrl, postsPutUrl } from "../../utils/url";
import { PostsFormProps } from "./types";

const PostsForm: FC<PostsFormProps> = ({ item = null, userData }) => {
    const postRequest = usePostRequest({ url: postsPostUrl });
    const putRequest = usePutRequest({ url: postsPutUrl(userData.id) });
    const [form] = Form.useForm();

    const formLabel = (title: string, name: string) => ({
        label: title,
        name: name,
        rules: [
            {
                required: true,
                message: `Please input ${title}!`,
            },
        ],
    });

    const formInput = (name: string) => ({
        placeholder: "Type here",
        name: name,
    });

    const onFinish = async (values: any) => {
        if (item !== null) {
            await putRequest.request({
                body: values,
            });
        } else {
            await postRequest.request({
                data: values,
            });
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
            <Space style={{ display: "flex", flexDirection: "column" }}>
                <Form.Item {...formLabel("Title", "title")}>
                    <Input {...formInput("title")} />
                </Form.Item>
                <Form.Item {...formLabel("Body", "body")}>
                    <Input {...formInput("body")} />
                </Form.Item>
            </Space>
            <Button
                htmlType="submit"
                type="primary"
                loading={postRequest.loading || putRequest.loading}
            >
                {item !== null ? "Edit" : "Submit"}
            </Button>
        </Form>
    );
};

export default PostsForm;
