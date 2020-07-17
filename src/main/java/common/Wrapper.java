package common;

import java.io.FileInputStream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Wrapper {

	static String filepath = "C:\\Users\\DineshMohanasundaram\\DineshWorkspace\\ELearningExercise\\resource\\TestData_Elearning.xlsx";
	
	public static String getDataFromExcel(String sheetName, String fieldName) {
	
		String fieldValue = null;
		
		try {
			FileInputStream fs = new FileInputStream(filepath);
			Workbook wb= new XSSFWorkbook(fs);
			Sheet sh=wb.getSheet(sheetName);
			
			for(int i=1; i<sh.getLastRowNum()+1; i++)
			{
				Row row = sh.getRow(i);
				Cell cell =row.getCell(0);
				String value=cell.getStringCellValue();
				if(value.equals(fieldName))
				{
					row = sh.getRow(i);
					cell =row.getCell(1);
					fieldValue=cell.getStringCellValue();
				}
				
			}
			
			}
			
			catch(Exception e) {
				
			}
		return fieldValue;
	}
	
}
