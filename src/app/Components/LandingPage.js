"use client";
import Link from "next/link";
import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import styles from "./home.module.css";
function LandingPage() {
  return (
    <>
      <div className={styles.landingWrapper}>
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className={styles.pageHeading}>ToDo App</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Link href="/tasks" style={{ textDecoration: "none" }}>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardLink}>
                    See all tasks
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Link href="/addTask" style={{ textDecoration: "none" }}>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardLink}>Add tasks</Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
