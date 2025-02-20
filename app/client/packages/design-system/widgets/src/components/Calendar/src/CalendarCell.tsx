import React from "react";
import { Text } from "@appsmith/wds";
import {
  CalendarCell as HeadlessCalendarCell,
  type CalendarCellProps as HeadlessCalendarCellProps,
} from "react-aria-components";

import styles from "./styles.module.css";

export type CalendarCellProps = HeadlessCalendarCellProps &
  React.RefAttributes<HTMLTableCellElement>;

function CalendarCell(props: CalendarCellProps) {
  const { date } = props;

  return (
    <HeadlessCalendarCell {...props} className={styles["calendar-cell"]}>
      <Text>{date.day}</Text>
    </HeadlessCalendarCell>
  );
}

export { CalendarCell };
