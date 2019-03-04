import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';


@Directive({ selector: '[isLogged]' })
export class IsLoggedDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private authenticationService: AuthenticationService,
    private viewContainer: ViewContainerRef
  ) {}

  condition: boolean;

  ngOnInit() {
    this.authenticationService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  @Input() set isLogged(condition: boolean) {
    this.condition = condition;
  }

}
