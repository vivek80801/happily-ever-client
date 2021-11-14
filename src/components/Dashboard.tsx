import React from "react";

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <>
      <form method="POST" action="/api/upload" encType="multipart/form-data">
        <h1>welcome to profile</h1>
        <input type="file" name="upload" />
        <input
          type="text"
          name="name"
          title="enter your name"
          placeholder="Enter your name"
        />
        <input
          type="date"
          name="dateOfBirth"
          title="choose date of birth"
          placeholder="Choose your date of birth"
          required
        />
        <input
          type="text"
          title="enter your religion"
          name="religion"
          placeholder="Enter your religion"
          required
        />
        <input
          type="number"
          title="enter your height"
          name="height"
          placeholder="Enter your height"
        />
        <input type="submit" value="save" />
      </form>
    </>
  );
};

export default Dashboard;
