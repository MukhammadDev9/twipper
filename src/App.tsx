import { Container } from "@mui/material";
import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/posts";
import Photos from "./pages/photos";
import Tasks from "./pages/tasks";

function App() {
    return (
        <Container sx={{ height: "100vh" }}>
            <Layout>
                <Routes>
                    <Route index path="/" element={<Posts />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/tasks" element={<Tasks />} />
                </Routes>
            </Layout>
        </Container>
    );
}

export default App;
