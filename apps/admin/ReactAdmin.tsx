import { Admin, Resource } from "react-admin";
import { PostCreate, PostList } from "./resources/Post";
import { TagCreate, TagList } from "./resources/Tag";
import { UserCreate, UserEdit, UserList, UserShow } from "./resources/User";
import { AdminCreate, AdminList } from "./resources/Admin";
import { useSession } from "next-auth/react";
import { authProvider } from "./providers/authProvider";
import { dataProvider } from "./providers/dataProvider";
import LoginPage from "./custom-pages/LoginPage";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
} from "./resources/Category";

const ReactAdmin = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>loading</p>;

  return (
    <Admin
      authProvider={authProvider(session)}
      dataProvider={dataProvider}
      disableTelemetry
      loginPage={LoginPage}
    >
      <Resource
        name="user"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        show={UserShow}
      />
      <Resource name="post" list={PostList} create={PostCreate} />
      <Resource name="tag" list={TagList} create={TagCreate} />
      <Resource name="admin" list={AdminList} create={AdminCreate} />
      <Resource
        name="category"
        list={CategoryList}
        create={CategoryCreate}
        edit={CategoryEdit}
      />
    </Admin>
  );
};

export default ReactAdmin;
