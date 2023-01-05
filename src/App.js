import Input from "./components/Input";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import Button from "./components/Button";
import Feedback from "./components/Feedback";
import ComplaintsForm from "./components/ComplaintsForm.";


function App() {
  return (
    <div className="mt-4 col-md-8 offset-2">
      <h3 className="text-center">Customer Complaints Form</h3>
      <hr/>
      {/* <Input/> */}
      {/* <Select/> */}
      {/* <TextArea/> */}
      {/* <Button/> */}
      {/* <Feedback/> */}
      <ComplaintsForm/>
    </div>    
  );
}

export default App;
