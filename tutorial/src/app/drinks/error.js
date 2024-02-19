"use client"

const error = (error) => {
    return (
        <div>T{error.error.message}</div>
    )
};

export default error;