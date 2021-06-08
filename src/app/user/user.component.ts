import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {
    constructor(
        private titleService: Title,
        private metaTagService: Meta
    ) {
        this.metaTagService.updateTag({'description':'Universal User page description' });
        this.metaTagService.updateTag({'og:description':'Universal User page description' });
        this.metaTagService.updateTag({'twitter:description':'Universal User page description' });
        this.titleService.setTitle('Universal User Page')
    }
}