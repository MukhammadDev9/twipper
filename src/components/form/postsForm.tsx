import { useState, type FC, useEffect } from "react";
import { Box, FormGroup, TextField } from "@mui/material";
import { SubmitButton } from "../atoms";
import { PostsDetailsErrorI, PostsDetailsI, PostsFormProps } from "./types";

const PostsForm: FC<PostsFormProps> = ({ item = null, userData }) => {
    const [details, setDetails] = useState<PostsDetailsI>({
        name: "",
        body: "",
        userId: userData.id,
    });
    const [detailsError, setDetailsError] = useState<PostsDetailsErrorI>({
        name: false,
        body: false,
    });

    useEffect(() => {
        if (item !== null && item?.body)
            setDetails({ ...details, name: userData.name, body: item?.body });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (details.name.length === 0) {
            return setDetailsError({ ...detailsError, name: true });
        } else if (details.body.length === 0) {
            return setDetailsError({ ...detailsError, body: true });
        } else {
            console.log("submited");
        }
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <FormGroup sx={{ mb: 2 }}>
                <TextField
                    label={"Name"}
                    variant="outlined"
                    autoComplete="off"
                    size={"small"}
                    required
                    fullWidth
                    error={detailsError.name}
                    value={details.name}
                    onChange={(e: any) =>
                        setDetails({ ...details, name: e.target.value })
                    }
                />
            </FormGroup>
            <FormGroup sx={{ mb: 2 }}>
                <TextField
                    label={"Body"}
                    variant="outlined"
                    autoComplete="off"
                    size={"small"}
                    required
                    fullWidth
                    error={detailsError.body}
                    value={details.body}
                    onChange={(e: any) =>
                        setDetails({ ...details, body: e.target.value })
                    }
                />
            </FormGroup>
            <SubmitButton />
        </Box>
    );
};

export default PostsForm;
