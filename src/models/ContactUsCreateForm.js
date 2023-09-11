import { API } from "aws-amplify";
import { createContactUsCreateForm } from './graphql/mutations';

const newContactUsCreateForm = await API.graphql({
  query: createContactUsCreateForm,
  variables: {
      input: {
  "Name": "Lorem ipsum dolor sit amet",
  "EmailId": "Lorem ipsum dolor sit amet",
  "Message": "Lorem ipsum dolor sit amet"
}
  }
});