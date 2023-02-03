import React from "react";
import { useGetAllQuery, usetGetByIdQuery } from "../services/starwarsService";

export default function Home() {
    const { data, error, isLoading } = useGetAllQuery();

    return (
        <div>
            {
                error ? (
                    <h1>Oh no, there was an error</h1>
                ) : isLoading ? (
                    <h1>Loading...</h1>
                ) : data ? (
                    { data }
                ) : null
            }
        </div>
    )
}

