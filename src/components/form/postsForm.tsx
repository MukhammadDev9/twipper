import { useState, type FC, useEffect } from "react";
import { Box, FormGroup, TextField } from "@mui/material";
import { SubmitButton } from "../atoms";
import { PostsDetailsErrorI, PostsDetailsI, PostsFormProps } from "./types";

const PostsForm: FC<PostsFormProps> = ({ item = null, userDataId }) => {
    const [details, setDetails] = useState<PostsDetailsI>({
        title: "",
        body: "",
        userId: userDataId,
    });
    const [detailsError, setDetailsError] = useState<PostsDetailsErrorI>({
        title: false,
        body: false,
    });

    useEffect(() => {
        if (item !== null)
            setDetails({ ...details, title: item.title, body: item.body });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (details.title.length === 0) {
            return setDetailsError({ ...detailsError, title: true });
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
                    label={"Title"}
                    variant="outlined"
                    autoComplete="off"
                    size={"small"}
                    required
                    fullWidth
                    error={detailsError.title}
                    value={details.title}
                    onChange={(e: any) =>
                        setDetails({ ...details, title: e.target.value })
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
