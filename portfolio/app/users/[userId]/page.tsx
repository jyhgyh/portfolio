export default function UserInfo({params}:{
    params: {userId: string}
}) {
    return <>
    <h1>This user id is {params.userId}</h1>
    </>
}