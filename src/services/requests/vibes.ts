import api from "services/config";

export function getVibes() {
    return api.get("vibes")
};