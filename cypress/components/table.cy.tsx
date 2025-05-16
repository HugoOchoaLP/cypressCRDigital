import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "../../src/components/ui/table";

describe("Table component", () => {
  it("renders table with header, body, and footer", () => {
    cy.mount(
      <Table>
        <TableCaption>Tabla de ejemplo</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Edad</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Juan</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ana</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    cy.get('[data-slot="table"]').should("exist");
    cy.contains("Tabla de ejemplo").should("exist");
    cy.get('[data-slot="table-head"]').should("have.length", 2);
    cy.get('[data-slot="table-cell"]').should("have.length", 6);
    cy.contains("Juan").should("exist");
    cy.contains("Ana").should("exist");
    cy.contains("Total").should("exist");
  });
});