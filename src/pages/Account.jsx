import Heading from "../ui/heading";
import Row from "../ui/row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>
      <Row type="vertical">
        <Heading as="h3">Update user data</Heading>
        <p>Update user data form</p>
      </Row>
      <Row type="vertical">
        <Heading as="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </>
  );
}

export default Account;
