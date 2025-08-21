export const handleError = (message: any) => {
    if (typeof message === "object") {
        const errors: any = [];

        Object.keys(message).map((key) => {
            message[key].map((e: any) => {
                errors.push(e);
            });
        });

        return errors.join();
    }

    return message;
};
