import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { take } from 'rxjs/operators';
import { UserService } from "./services/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
    userMetaData: any;
    userData: any;

    constructor(
        private userService: UserService,
        private titleService: Title,
        private metaTagService: Meta
    ) {
        this.userService.getUserMetaData().pipe(take(1)).subscribe(res => {
            this.userMetaData = res;
            this.metaTagService.updateTag({ 'description': this.userMetaData.description });
            this.metaTagService.updateTag({ 'og:description': this.userMetaData.description });
            this.metaTagService.updateTag({ 'twitter:description': this.userMetaData.description });
            this.userMetaData.image && this.metaTagService.updateTag({ 'og:image': this.userMetaData.image });
            this.titleService.setTitle(this.userMetaData.title);
        });
    }

    ngOnInit(): void {
        this.getUserData();
    }

    getUserData(): void {
        this.userService.getUserData().pipe(take(1)).subscribe(user => {
            this.userData = user;
        }, error => {
            console.log('user API error :>> ', error);
        });
    }

    decodeUri(url: string): string {
        return decodeURIComponent(url);
    }
}