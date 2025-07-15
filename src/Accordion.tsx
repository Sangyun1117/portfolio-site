import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
type AccordionProps = {
  title: string;
  children?: React.ReactNode;
};
const StyledAccordion = styled.div`
  padding-bottom: 2rem;
`;
const StyledAccordionTitle = styled.div`
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`;
const ContentWrapper = styled.div<{ isOpen: boolean; contentHeight: number }>`
  max-height: ${({ isOpen, contentHeight }) =>
    isOpen ? `${contentHeight}px` : "0"};
  overflow: hidden;
  transition: max-height 0.8s ease;
`;

const AccordionContent = styled.div`
  * {
    margin: 0;
    padding: 4px 0;
  }
`;
function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const onClickAccordion = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (contentRef.current) {
      setTimeout(() => {
        setContentHeight(contentRef.current!.scrollHeight);
      }, 0);
    }
  }, [children, isOpen]);
  return (
    <StyledAccordion>
      <StyledAccordionTitle onClick={onClickAccordion}>
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </StyledAccordionTitle>
      <ContentWrapper isOpen={isOpen} contentHeight={contentHeight}>
        <AccordionContent ref={contentRef}>{children}</AccordionContent>
      </ContentWrapper>
    </StyledAccordion>
  );
}

export default Accordion;
