import { useEffect, type FC } from "react";
import { Form, message } from "antd";
import { usePostRequest, usePutRequest } from "../../../hooks/request";
import { albumsPostUrl, albumsPutUrl } from "../../../utils/url";
import { AlbumsFormProps } from "./types";

const AlbumsForm: FC<AlbumsFormProps> = ({
    item = null,
    userData,
    onClose,
}) => {
    const postRequest = usePostRequest({ url: albumsPostUrl });
    const putRequest = usePutRequest({ url: albumsPutUrl(userData.id) });
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
            Form
        </Form>
    );
};

export default AlbumsForm;
