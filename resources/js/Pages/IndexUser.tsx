import { Inertia } from "@inertiajs/inertia";
import React, { FormEvent, useState } from "react";
import ReactDOM from "react-dom";

interface Users {
    id?: number;
    name?: string;
    email?: string;
}
interface Props {
    users?: Array<Users>;
}
export default (props: Props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const { users } = props;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        Inertia.post("/store", { name: name, email: email, password: '12345678' });
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h2>Lista de Usuários</h2>
                        </div>
                        <div className="card-body">
                            {users?.map(user => {
                                return <h2 key={user.id}>{user.name}</h2>;
                            })}
                        </div>
                        <div className="card-footer">
                            <form className="form-inline" onSubmit={handleSubmit}>
                                <div className="form-group mr-3">
                                    <label className="ml-2" htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        className="form-control" 
                                        onChange={event =>
                                            setName(event.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group mr-3">
                                    <label className="ml-2" htmlFor="email">Email</label>
                                    <input
                                     className="form-control" 
                                        id="name"
                                        onChange={event =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    className="btn btn-success mr-3"
                                    type="submit"
                                >
                                    Confirmar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
