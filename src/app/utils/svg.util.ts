import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgManager = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const sidebarDir = 'assets/icons/sidebar/';
    // left hand side correlation
    ir.addSvgIcon('deliver_goods', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}deliver_goods.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}dayview.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}monthlyview.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}project-solid-list.svg`));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}project.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/weeklyview.svg`));

    // days icons
}