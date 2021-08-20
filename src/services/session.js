import api from "./api";

export async function login(user, setloading = () => { }) {
    let status = false;

    try {
        setloading(true);
        const response = await api.post('/', user)
        if (response && response.data) {
            const token = response.data;
            status = true;
        }
    } catch (err) {
        console.log(err);
    } finally {
        setloading(false);
    }
    return status;
}