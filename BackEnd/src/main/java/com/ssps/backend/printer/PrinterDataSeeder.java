package com.ssps.backend.printer;

import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;

@Service
public class PrinterDataSeeder {

    private final PrinterRepository printerRepository;

    public PrinterDataSeeder(PrinterRepository printerRepository) {
        this.printerRepository = printerRepository;
    }

    @PostConstruct
    public void seedPrinters() {
        // Check if the database is empty before adding printers
        if (printerRepository.count() == 0) {
            Printer printer1 = new Printer();
            printer1.setId("PRT_01");
            printer1.setLocation("Campus B4 - Room 101");
            printer1.setStatus("AVAILABLE");
            printer1.setModel("DELL");
            printer1.setPaperCapacity(500);
            printer1.setPaperAvailable(300);

            Printer printer2 = new Printer();
            printer2.setId("PRT_02");
            printer2.setLocation("Campus A1 - Room 202");
            printer2.setStatus("BUSY");
            printer2.setModel("BROTHER");
            printer2.setPaperCapacity(300);
            printer2.setPaperAvailable(150);

            Printer printer3 = new Printer();
            printer3.setId("PRT_03");
            printer3.setLocation("Library - Floor 2");
            printer3.setStatus("AVAILABLE");
            printer3.setModel("CANON");
            printer3.setPaperCapacity(1000);
            printer3.setPaperAvailable(750);

            Printer printer4 = new Printer();
            printer4.setId("PRT_04");
            printer4.setLocation("Campus C2 - Room 304");
            printer4.setStatus("OUT_OF_SERVICE");
            printer4.setModel("HP");
            printer4.setPaperCapacity(200);
            printer4.setPaperAvailable(0);

            Printer printer5 = new Printer();
            printer5.setId("PRT_05");
            printer5.setLocation("Campus D1 - Room 105");
            printer5.setStatus("AVAILABLE");
            printer5.setModel("EPSON");
            printer5.setPaperCapacity(700);
            printer5.setPaperAvailable(400);

            Printer printer6 = new Printer();
            printer6.setId("PRT_06");
            printer6.setLocation("Campus B1 - Room 201");
            printer6.setStatus("BUSY");
            printer6.setModel("RICOH");
            printer6.setPaperCapacity(800);
            printer6.setPaperAvailable(500);

            Printer printer7 = new Printer();
            printer7.setId("PRT_07");
            printer7.setLocation("Campus A2 - Room 102");
            printer7.setStatus("AVAILABLE");
            printer7.setModel("LEXMARK");
            printer7.setPaperCapacity(400);
            printer7.setPaperAvailable(300);

            Printer printer8 = new Printer();
            printer8.setId("PRT_08");
            printer8.setLocation("Library - Floor 3");
            printer8.setStatus("AVAILABLE");
            printer8.setModel("XEROX");
            printer8.setPaperCapacity(900);
            printer8.setPaperAvailable(600);

            Printer printer9 = new Printer();
            printer9.setId("PRT_09");
            printer9.setLocation("Campus C1 - Room 404");
            printer9.setStatus("OUT_OF_SERVICE");
            printer9.setModel("SAMSUNG");
            printer9.setPaperCapacity(250);
            printer9.setPaperAvailable(0);

            // Save printers to the database
            printerRepository.save(printer1);
            printerRepository.save(printer2);
            printerRepository.save(printer3);
            printerRepository.save(printer4);
            printerRepository.save(printer5);
            printerRepository.save(printer6);
            printerRepository.save(printer7);
            printerRepository.save(printer8);
            printerRepository.save(printer9);
        }
    }
}
