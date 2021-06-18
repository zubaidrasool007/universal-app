import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { take } from 'rxjs/operators';
import { UserService } from "./services/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {
    userMetaData: any;

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
            this.metaTagService.updateTag({ 'og:image': this.userMetaData.image });
            this.titleService.setTitle(this.userMetaData.title);
        });
    }

    decodeUri(url: string): string {
        return decodeURIComponent(url);
    }
}