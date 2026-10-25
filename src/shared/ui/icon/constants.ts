import SVGCalendar from '@/shared/ui/icon/assets/calendar.svg?react';
import SVGSort from '@/shared/ui/icon/assets/sort.svg?react';
import SVGFilter from '@/shared/ui/icon/assets/filter.svg?react';
import SVGGroup from '@/shared/ui/icon/assets/group.svg?react';
import SVGInfo from '@/shared/ui/icon/assets/info.svg?react';
import SVGPencil from '@/shared/ui/icon/assets/pencil.svg?react';
import SVGStar from '@/shared/ui/icon/assets/star.svg?react';
import SVGSearch from '@/shared/ui/icon/assets/search.svg?react';
import SVGEllipsis from '@/shared/ui/icon/assets/ellipsis.svg?react';
import SVGColumns from '@/shared/ui/icon/assets/columns.svg?react';
import SVGOptions from '@/shared/ui/icon/assets/options.svg?react';
import SVGChevron from '@/shared/ui/icon/assets/chevron.svg?react';
import SVGPerson from '@/shared/ui/icon/assets/person.svg?react';
import SVGPlus from '@/shared/ui/icon/assets/plus.svg?react';
import SVGSubitems from '@/shared/ui/icon/assets/subitems.svg?react';
import SVGCaret from '@/shared/ui/icon/assets/caret.svg?react';
import SVGBurger from '@/shared/ui/icon/assets/burger.svg?react';
import SVGCross from '@/shared/ui/icon/assets/cross.svg?react';
import SVGStatusIndicator from '@/shared/ui/icon/assets/status-indicator.svg?react';
import SVGQuestionMark from '@/shared/ui/icon/assets/question-mark.svg?react';
import SVGCheckMark from '@/shared/ui/icon/assets/check-mark.svg?react';
import SVGLeadership from '@/shared/ui/icon/assets/leadership.svg?react';
import SVGGrabber from '@/shared/ui/icon/assets/grabber.svg?react';
import SVGHidden from '@/shared/ui/icon/assets/hidden.svg?react';
import SVGVisible from '@/shared/ui/icon/assets/visible.svg?react';
import SVGNotification from '@/shared/ui/icon/assets/notification.svg?react';
import type { FC, SVGProps } from 'react';
import type { TIconName } from '@/shared/ui/icon/types.ts';

export const IconRegistry: Record<TIconName, FC<SVGProps<SVGSVGElement>>> = {
    calendar: SVGCalendar,
    sort: SVGSort,
    filter: SVGFilter,
    group: SVGGroup,
    info: SVGInfo,
    pencil: SVGPencil,
    star: SVGStar,
    search: SVGSearch,
    ellipsis: SVGEllipsis,
    columns: SVGColumns,
    options: SVGOptions,
    chevron: SVGChevron,
    person: SVGPerson,
    plus: SVGPlus,
    subitems: SVGSubitems,
    caret: SVGCaret,
    burger: SVGBurger,
    cross: SVGCross,
    statusIndicator: SVGStatusIndicator,
    questionMark: SVGQuestionMark,
    checkMark: SVGCheckMark,
    leadership: SVGLeadership,
    grabber: SVGGrabber,
    hidden: SVGHidden,
    visible: SVGVisible,
    notification: SVGNotification,
};
