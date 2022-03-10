import { Link } from "react-router-dom";
import { Button, Form } from "antd";
import "antd/dist/antd.css";


const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 10,
  },
};

function Back1() {
  return (

    <Form {...layout}>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <h3>Мэдээлэл амжилттай шинэчлэгдлээ.</h3>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Link to="/">
          <Button type="primary">Буцах</Button>
        </Link>
      </Form.Item>
    </Form>
  );
}

export default Back1;
