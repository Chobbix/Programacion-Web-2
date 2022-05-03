import { axiosBase as axios } from "./Config";

export const SubscriptionCreate = async (req) => {
    try {
        const response = await axios.post(`/streak/${req._id}/subscription`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionDelete = async (req) => {
    try {
        const response = await axios.delete(`/subscription/${req._id}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionGetByStreakAndUser = async (req) => {
    try {
        const response = await axios.get(`/streak/${req._streak}/subscription/${req._user}/users`, req);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionGetById = async (req) => {
    try {
        const response = await axios.get(`/subscription/${req}`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionIncreaseCounter = async (req) => {
    try {
        const response = await axios.put(`/subscription/${req._id}/increase-counter`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SubscriptionGetSubscriptionsByUser = async (req) => {
    try {
        const response = await axios.get(`/users/${req}/subscriptions`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}