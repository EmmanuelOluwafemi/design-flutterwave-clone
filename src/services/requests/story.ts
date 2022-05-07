import api from "services/config";

export function getStory(id: string) {
    return api.get(`stories/${id}`)
};