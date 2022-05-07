import api from "services/config";

export function getStories() {
    return api.get("stories")
};