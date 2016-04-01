/**
 * Component AddUserComponent
 */

import {Component} from 'angular2/core';
import {UserComponent} from "../user/user.component";
import {ManageUsersService} from "../../shared/services/src/manage-users.service";

@Component({
    selector: 'add-user',
    moduleId: module.id,
    templateUrl: './add-user.component.html',
    styleUrls : ['./add-user.component.css'],
    providers: [ManageUsersService]
})

/**
 * Class AddUser
 */
export class AddUserComponent {

    public userTypesValues;
    public websitePartsValues;
    public reportsValues;
    public submitted;
    public user;

    public userManager;
    public userManager_error = false;

    constructor(private _manageUserService: ManageUsersService){
        this.submitted = false;
        this.userTypesValues = ["Admin","Operational","Developer","Manager"];
        this.websitePartsValues = ["Metrics","Performance"]; //TODO: TO use !
        this.reportsValues = ["Yes","No"]; //TODO: TO use !
        this.user= new UserComponent("", "", "",
            "", [""], true);
    }

    onSubmit(){
        this.submitted=true;
        /*this._manageUserService.getUsers().subscribe(
            data => {
                this.userManager = data[0];
            },
            err => { this.userManager_error = true },
            () => console.log('done')
        );*/
        this._manageUserService.addUser("Pierre").subscribe(
            data => {
                this.userManager = data[0];
            },
            err => { this.userManager_error = true },
            () => console.log('done')
        );
    }
}