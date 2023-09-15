import React, { useState } from "react";
import UserTable from "../../components/user_table/index";
import FormUser from "../../components/off_canvas/addUser";
import "../home_page/styles.css"



const HomePage = () => {

    return (
      <>       
        <div className="contentsManage">
        <FormUser></FormUser>
          <UserTable></UserTable>
        </div>
      </>
    );
  };
  
  export default HomePage;
  
  
  