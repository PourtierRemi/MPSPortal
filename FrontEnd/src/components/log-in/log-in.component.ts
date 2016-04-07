/**
 * Component LogInComponent
 */

import {Component} from 'angular2/core';
import {ManageUsersService} from "../../shared/services/src/manage-users.service";
import {UserComponent} from "../user/user.component";

@Component({
    selector: 'log-in',
    moduleId: module.id,
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css'],
    providers: [ManageUsersService]
})
export class LogInComponent {

    public user;
    public submitted;
    public responseFromServer;
    public errorFromServer;

    /**
     * Constructor LogInComponent.
     * We inject ManageUserService into the component thanks to the parameters we give here.
     * Then, it initializes all the component attributes.
     * @param _manageUserService
     */
    constructor(private _manageUserService:ManageUsersService) {
        this.user = new UserComponent("", "", "",
            "", false, false, false, false, "","");
    }

    /**
     * Function buildUserJSON.
     * The function builds the JSON from the user information filled in the form.
     * @returns JSON
     */
    buildUserJSON() {
        let userJSON = {
            password: this.user.password,
            login: this.user.login
        };

        console.log("user json: "+userJSON["password"]);
        return userJSON;
    }

    redirect(responseFromDB){
        console.log("into redirect, response: "+responseFromDB[0].user_id);
        this.user=responseFromDB[0];
        this.submitted = true;

    }

    /**
     * Function onSubmit.
     * The function is called when user click on the submit button in the form. Then,
     * we build a JSON from data given by user (couple login/password) and then we send the data to the server.
     */
    onSubmit() {
        console.log("Into on submit");//TR4tQ0DL

        let finalUserJSON = this.buildUserJSON();
        this._manageUserService.connect(finalUserJSON).then(
            user => this.redirect(user), //this.user=user,
            error => this.errorFromServer = <any> error);

    }
}