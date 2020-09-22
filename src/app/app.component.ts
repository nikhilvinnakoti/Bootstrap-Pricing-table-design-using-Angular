import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartask';
  profileData = [
    {
      type: "FREE",
      rate: "$0",
      userType: "Single User",
      Storage: "50GB Storage",
      Projects: "Unlimited Public Projects",
      Access: "Community Access",
      Project: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Status: "Monthly Status Reports"
    },
    {
      type: "PLUS",
      rate: "$9",
      userType: "5 Users",
      Storage: "50GB Storage",
      Projects: "Unlimited Public Projects",
      Access: "Community Access",
      Project: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Status: "Monthly Status Reports"
    },
    {
      type: "PRO",
      rate: "$45",
      userType: "Unlimited Users",
      Storage: "150GB Storage",
      Projects: "Unlimited Public Projects",
      Access: "Community Access",
      Project: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Unlimited Free Subdomains",
      Status: "Monthly Status Reports"
    }
  ]
}
