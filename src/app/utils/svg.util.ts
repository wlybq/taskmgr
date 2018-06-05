import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgManager = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const iconsDir = 'assets/icons';
    const sidebarDir = `${iconsDir}/sidebar`;
    // left hand side correlation
    ir.addSvgIcon('deliver_goods', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/deliver_goods.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/dayview.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/monthlyview.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project-solid-list.svg`));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}//weeklyview.svg`));

    // days icons
    const days = [
        1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31
    ];
    const dayDir = `${iconsDir}/days`;
    days.forEach(i => { ir.addSvgIcon(`day${i}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${i}.svg`)); });


    // avatar svg load
    const avatarDir = `${iconsDir}/avatar`;
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));

}