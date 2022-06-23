import React, { useState } from 'react';
import { useGetUsersQuery } from './generated/graphql';

type UserData = {
  id: number,
  name: string,
  surname: string,
  schoolname?: string | null,
  status: number
}


function App() {
  const [userData, setUserData] = useState([] as UserData[]);
  const { loading } = useGetUsersQuery({
    onCompleted: (res) => {
      if (res.users) {
        setUserData(res?.users)
      }
    }
  });
  console.log("AA")

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>{userData && userData.map((x: UserData) => (
      <div>{x.name} - {x.surname}</div>
    ))}</div>
  );
}

export default App;
