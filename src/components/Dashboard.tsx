interface Auth {
	isAuth: boolean;
	name: string;
	email: string;
}
export default function Dashboard(props:{auth:Auth}){
    return(
        <div>
            <p>Welcome{" "}{props.auth.name}</p>
        </div>
    )
}