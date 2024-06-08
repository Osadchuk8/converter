package com.olex.converter;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

@Service
public class CsvToExcelService {

    public ByteArrayInputStream convertCsvToExcel(String csvData) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            Sheet sheet = workbook.createSheet("Data");

            String[] rows = csvData.split("\n");
            for (int i = 0; i < rows.length; i++) {
                Row row = sheet.createRow(i);
                String[] cells = rows[i].split(",");
                for (int j = 0; j < cells.length; j++) {
                    row.createCell(j).setCellValue(cells[j]);
                }
            }

            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        } finally {
            workbook.close();
            out.close();
        }
    }
}
