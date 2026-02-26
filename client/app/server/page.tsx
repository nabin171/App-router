import { GetServerSideProps, NextPage } from "next";

type UserPageProps = {
  name: string;
};

const UserPage: NextPage<UserPageProps> = ({ name }) => {
  return <div>User Page – {name}</div>;
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  context
) => {
  console.log("as task is going on in server");

  return {
    props: {
      name: "nabin",
    },
  };
};

export default UserPage;
