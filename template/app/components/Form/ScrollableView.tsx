import React from 'react';
import {ScrollView, ScrollViewProps, findNodeHandle} from 'react-native';

export type ScrollableViewProps = {
  children: React.ReactNode;
} & ScrollViewProps;

export const getPosition = (containerRef: any, ref: any, clb: any) => {
  let result = {top: 0, left: 0, width: 0, height: 0};
  if (ref.current && containerRef.current) {
    ref.current.measureLayout(
      findNodeHandle(containerRef.current),
      (left: number, top: number, width: number, height: number) => {
        result = {left, top, width, height};
        clb(result);
      },
    );
  } else {
    throw Error('please check your "containerRef" and "ref"');
  }
};

export class ScrollableView extends React.Component<ScrollViewProps> {
  private target: React.RefObject<ScrollView> = React.createRef(); // or some other type of Component
  constructor(props: ScrollViewProps) {
    super(props);
  }

  public async scrollToView(childRef: any) {
    getPosition(
      this.target,
      childRef,
      ({left, top}: {left: number; top: number}) => {
        this.target.current?.scrollTo({x: left, y: top, animated: true});
      },
    );
  }

  render() {
    const {children} = this.props;
    return <ScrollView ref={this.target}>{children}</ScrollView>;
  }
}
