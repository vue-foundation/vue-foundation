// This Foundation loader file was built from the following source file:
// - foundation-sites/dist/js/npm.js

// The 'zf' path alias is configured in the following config file:
// - build/webpack.base.conf.js

// Foundation core and utils - Best to import all of these
import jQuery from 'jquery';
import { Foundation } from 'zf/foundation.core';
import { rtl, GetYoDigits, transitionend } from 'zf/foundation.util.core';
import { Box } from 'zf/foundation.util.box';
import { onImagesLoaded } from 'zf/foundation.util.imageLoader';
import { Keyboard } from 'zf/foundation.util.keyboard';
import { MediaQuery } from 'zf/foundation.util.mediaQuery';
import { Motion, Move } from 'zf/foundation.util.motion';
import { Nest } from 'zf/foundation.util.nest';
import { Timer } from 'zf/foundation.util.timer';
import { Touch } from 'zf/foundation.util.touch';
import { Triggers } from 'zf/foundation.util.triggers';

// Foundation plugins - Pick and choose your plugins here!
// If you comment out a plugin you will need to comment out
// the corresponding Foundation.plugin line also.
// This is a template project so they have all been imported.
import { Abide } from 'zf/foundation.abide';
import { Accordion } from 'zf/foundation.accordion';
import { AccordionMenu } from 'zf/foundation.accordionMenu';
import { Drilldown } from 'zf/foundation.drilldown';
import { Dropdown } from 'zf/foundation.dropdown';
import { DropdownMenu } from 'zf/foundation.dropdownMenu';
import { Equalizer } from 'zf/foundation.equalizer';
import { Interchange } from 'zf/foundation.interchange';
import { Magellan } from 'zf/foundation.magellan';
import { OffCanvas } from 'zf/foundation.offcanvas';
import { Orbit } from 'zf/foundation.orbit';
import { ResponsiveMenu } from 'zf/foundation.responsiveMenu';
import { ResponsiveToggle } from 'zf/foundation.responsiveToggle';
import { Reveal } from 'zf/foundation.reveal';
import { Slider } from 'zf/foundation.slider';
import { SmoothScroll } from 'zf/foundation.smoothScroll';
import { Sticky } from 'zf/foundation.sticky';
import { Tabs } from 'zf/foundation.tabs';
import { Toggler } from 'zf/foundation.toggler';
import { Tooltip } from 'zf/foundation.tooltip';
import { ResponsiveAccordionTabs } from 'zf/foundation.responsiveAccordionTabs';

// Add jQuery to the window object
window.$ = jQuery;
window.jQuery = jQuery;

// Require non-modular scripts
require('motion-ui');
require('what-input');

Foundation.addToJquery(jQuery);

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;
Foundation.Box = Box;
Foundation.onImagesLoaded = onImagesLoaded;
Foundation.Keyboard = Keyboard;
Foundation.MediaQuery = MediaQuery;
Foundation.Motion = Motion;
Foundation.Move = Move;
Foundation.Nest = Nest;
Foundation.Timer = Timer;

// Touch and Triggers previously were almost purely sede effect driven,
// so nzf// need to add it to Foundation, just init them.
Touch.init(jQuery);
Triggers.init(jQuery, Foundation);
Foundation.plugin(Abide, 'Abide');
Foundation.plugin(Accordion, 'Accordion');
Foundation.plugin(AccordionMenu, 'AccordionMenu');
Foundation.plugin(Drilldown, 'Drilldown');
Foundation.plugin(Dropdown, 'Dropdown');
Foundation.plugin(DropdownMenu, 'DropdownMenu');
Foundation.plugin(Equalizer, 'Equalizer');
Foundation.plugin(Interchange, 'Interchange');
Foundation.plugin(Magellan, 'Magellan');
Foundation.plugin(OffCanvas, 'OffCanvas');
Foundation.plugin(Orbit, 'Orbit');
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');
Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');
Foundation.plugin(Reveal, 'Reveal');
Foundation.plugin(Slider, 'Slider');
Foundation.plugin(SmoothScroll, 'SmoothScroll');
Foundation.plugin(Sticky, 'Sticky');
Foundation.plugin(Tabs, 'Tabs');
Foundation.plugin(Toggler, 'Toggler');
Foundation.plugin(Tooltip, 'Tooltip');
Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');

export default Foundation;
