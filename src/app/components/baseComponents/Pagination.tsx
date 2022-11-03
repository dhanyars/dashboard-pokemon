import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./styles/_pagination.scss";

export interface PaginationProps {
  onLeftClick: any;
  onRightClick: any;
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onLeftClick,
  onRightClick,
  currentPage,
  totalPages,
}) => {
  return (
    <Container>
      <Row>
        <div className="pagination">
          <Button className="pagination-btn" onClick={onLeftClick}>
            Prev
          </Button>
          <div className="pagination-counter">
            {currentPage} of {totalPages}
          </div>
          <Button className="pagination-btn" onClick={onRightClick}>
            Next
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Pagination;
