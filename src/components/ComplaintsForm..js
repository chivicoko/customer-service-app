import React, {Component} from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
import Feedback from "./Feedback";


class ComplaintsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            reason: "",
            reasonOptions: [
                "My account was debited erroneously",
                "My card is expired",
                "My transaction failed",
                "Others"
            ],
            feedbackDetails: null,
            showFeedbackDetails: false,
        };
    }

    // handleFullNameChange = (e) => {
    //     this.setState({fullName: e.target.value});
    // }

    // handleEmailChange = (e) => {
    //     this.setState({email: e.target.value});
    // }

    // handleReasonChange = (e) => {
    //     this.setState({reason: e.target.value});
    // }

    handleInputChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleComplaintSubmission = (e) => {
        e.preventDefault();
        const {fullName, email, reason, description} = this.state;

        const feedbackDetails = {
            fullName: fullName,
            email: email,
            reason: reason,
            description: description
        };

        if(fullName !== "" && email !== "" && reason !== "" && description !== "") {
            this.setState({feedbackDetails: feedbackDetails, showFeedbackDetails: true});
        }

        // console.log({feedbackDetails});
    };

    handleFormReset = (e) => {
        e.preventDefault();

        this.setState({
            fullName: "",
            email: "",
            reason: "",
            description: "",        
            showFeedbackDetails: false
        })
    }

    render () {
        return (
            <div className="row mt-4">

                <form className="col-md-6">
                    <Input
                        name="fullName"
                        title="Full Name"
                        inputTye="text"
                        placeholder="Enter your full name"
                        // handleChange={this.handleFullNameChange}
                        handleChange={this.handleInputChange}
                        value={this.state.fullName}
                    />
                        <br/>
                    <Input
                        name="email"
                        title="Email"
                        inputTye="email"
                        placeholder="Enter your email address"
                        // handleChange={this.handleEmailChange}
                        handleChange={this.handleInputChange}
                        value={this.state.email}
                    />
                        <br/>
                    <Select
                        title="Reason of Contact"
                        name="reason"
                        value={this.state.reason}
                        options={this.state.reasonOptions}
                        // handleChange={this.handleReasonChange}
                        handleChange={this.handleInputChange}
                        placeholder="Select a reason"
                    />
                        <br/>
                    <TextArea
                        title="Description"
                        name="description"
                        rows={5}
                        cols={10}
                        value={this.state.description}
                        handleChange={this.handleInputChange}
                        placeholder="Enter a description"
                    />
                        <br/>
                    <Button
                        title="Submit Complaint"
                        backgroundColor="#27ae60"
                        onButtonClick={this.handleComplaintSubmission}
                    />
                    
                    <Button
                        title="Reset Form"
                        backgroundColor="#7f8c8d"
                        onButtonClick={this.handleFormReset}
                    />

                </form>

                {this.state.showFeedbackDetails && (
                    <div className="col-md-6">
                        <Feedback feedbackDetails={this.state.feedbackDetails}/>
                    </div>
                    )}

            </div>
        );
    }
    
}

export default ComplaintsForm;