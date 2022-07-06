-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cabdb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_drivers`
--

DROP TABLE IF EXISTS `tbl_drivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_drivers` (
  `vchDriverId` varchar(255) NOT NULL,
  `vchDriverOwner` varchar(255) DEFAULT NULL,
  `vchDriverName` varchar(255) DEFAULT NULL,
  `vchDriverMob1` varchar(12) DEFAULT NULL,
  `vchDriverMob2` varchar(12) DEFAULT NULL,
  `vchDriverLicense` varchar(45) DEFAULT NULL,
  `vchDriverAdhaar` varchar(45) DEFAULT NULL,
  `vchDriverAddr` varchar(255) DEFAULT NULL,
  `vchDriverCity` varchar(255) DEFAULT NULL,
  `intDriverState` int DEFAULT NULL COMMENT '1. Odisha\n2. AP',
  `intDriverZip` int DEFAULT NULL,
  `dtmDriverCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtmDriverUpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`vchDriverId`),
  UNIQUE KEY `vchDriverId_UNIQUE` (`vchDriverId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_drivers`
--

LOCK TABLES `tbl_drivers` WRITE;
/*!40000 ALTER TABLE `tbl_drivers` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_drivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_owners`
--

DROP TABLE IF EXISTS `tbl_owners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_owners` (
  `vchOwnerUid` varchar(255) NOT NULL,
  `vchOwnerName` varchar(255) DEFAULT NULL,
  `vchOwnerEmail` varchar(255) DEFAULT NULL,
  `vchOwnerMob` varchar(12) DEFAULT NULL,
  `vchOwnerAddr` varchar(255) DEFAULT NULL,
  `vchOwnerCity` varchar(255) DEFAULT NULL,
  `intOwnerState` int DEFAULT NULL,
  `intOwnerZip` int DEFAULT NULL,
  `dtmOwnerCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtmOwnerUpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`vchOwnerUid`),
  UNIQUE KEY `vchOwnerUid_UNIQUE` (`vchOwnerUid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_owners`
--

LOCK TABLES `tbl_owners` WRITE;
/*!40000 ALTER TABLE `tbl_owners` DISABLE KEYS */;
INSERT INTO `tbl_owners` VALUES ('OWNODBHU001','Ashis Kumar','srimanashis@gmail.com','919777735384','Test Address','Bhubaneswar',1,751020,'2022-04-28 12:40:11',NULL),('OWNODBHU021','AJAY JADEJA','ajay1@gmail.com','917735836084','Test Address','BHUBANESWAR',1,564134,'2022-04-29 15:43:57',NULL),('OWNODBHU025','damodara naik','dam@gmail.com','917420356505','Test Address','Cuttack',1,174545,'2022-04-29 15:43:57',NULL),('OWNODCTC001','Swasti Kumar','swasti1@gmail.com','917978233870','Test Address','Cuttack',1,123456,'2022-04-28 15:03:10',NULL),('OWNODCUT031','Abhay JHA','abhay@gmail.com','917895602342','Test Address','CUTTACK',1,489266,'2022-04-29 15:43:57',NULL),('OWNODCUT033','Binaya Dey','binay@gmail.com','918249042035','Test Address','Bhubaneswar',1,560505,'2022-04-29 15:43:57',NULL);
/*!40000 ALTER TABLE `tbl_owners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_pricing`
--

DROP TABLE IF EXISTS `tbl_pricing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_pricing` (
  `vchPricingTaxiNo` varchar(45) NOT NULL,
  `intPricingPkg1` int DEFAULT '0' COMMENT '3hr/40km',
  `intPricingPkg2` int DEFAULT '0' COMMENT '5hr/100km',
  `intPricingPkg3` int DEFAULT '0' COMMENT '6hr/60km',
  `intPricingPkg4` int DEFAULT '0' COMMENT '7hr/150km',
  `intPricingPkg5` int DEFAULT '0' COMMENT '8hr/80km',
  `intPricingPkg6` int DEFAULT '0' COMMENT '12hr/180km',
  `intPricingExtraKm` int DEFAULT '0',
  `intPricingOutstationKm` int DEFAULT '0',
  `intPricingExtraHrs` int DEFAULT '0',
  `intPricingCommission` int DEFAULT '0' COMMENT '%',
  `dtmPricingCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtmPricingUpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`vchPricingTaxiNo`),
  UNIQUE KEY `vchPricingTaxiNo_UNIQUE` (`vchPricingTaxiNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_pricing`
--

LOCK TABLES `tbl_pricing` WRITE;
/*!40000 ALTER TABLE `tbl_pricing` DISABLE KEYS */;
INSERT INTO `tbl_pricing` VALUES ('OD33B1234',1000,1200,1500,2000,2500,3000,12,12,50,0,'2022-04-28 15:19:28',NULL),('OD33B2345',1200,1400,1800,2300,2700,3000,10,10,50,0,'2022-04-28 15:21:21',NULL);
/*!40000 ALTER TABLE `tbl_pricing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_taxi_details`
--

DROP TABLE IF EXISTS `tbl_taxi_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_taxi_details` (
  `vchDetailsTaxiNo` varchar(15) NOT NULL,
  `intDetailsFuel` int DEFAULT NULL COMMENT '1. Petrol\n2. Diesel\n3. CNG\n4. Battery',
  `vchDetailsChesis` varchar(255) DEFAULT NULL,
  `vchDetailsColor` varchar(100) DEFAULT NULL,
  `dtmDetailsCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtmDetailsUpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`vchDetailsTaxiNo`),
  UNIQUE KEY `vchDetailsTaxiNo_UNIQUE` (`vchDetailsTaxiNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_taxi_details`
--

LOCK TABLES `tbl_taxi_details` WRITE;
/*!40000 ALTER TABLE `tbl_taxi_details` DISABLE KEYS */;
INSERT INTO `tbl_taxi_details` VALUES ('OD04Z1045',1,'1HGBH41JXMN109186','Black',NULL,NULL),('OD04Z1111',2,'1HGBH41JXMN109184','Red',NULL,NULL),('OD04Z1245',1,'1HGBH41JXLN109184','Blue',NULL,NULL),('OD04Z1250',2,'1HGBH41JXLN169184','white',NULL,NULL),('OD04Z1285',1,'1HGBH41JXLN169188','Gray',NULL,NULL),('OD04Z3245',2,'1HGBH41JXLN169188','Red',NULL,NULL),('OD05C1947',1,'1HGBH51JXLN169188','Blue',NULL,NULL),('OD07C6545',2,'1HGBH51JXLN169288','Black',NULL,NULL),('OD08Q5566',1,'2HGBH51JXLN169288','Red',NULL,NULL),('OD09G7689',2,'2HGBH51ZXLN169288','white',NULL,NULL),('OD09X4560',2,'2HGBH51ZXLN169288','Black',NULL,NULL),('OD33B1234',1,'2HGAH51ZXLN169288','Gray',NULL,NULL),('OD33B2345',1,'2HGAH51ZXLN169280','Gray',NULL,NULL),('OD33B3456',1,'3HGAH51ZXLN169280','white',NULL,NULL),('OD33B4567',2,'3HGAH51ZXLN169281','Red',NULL,NULL),('OD33B5678',3,'4HGAH51ZXLN169281','Gray',NULL,NULL),('OD33B6789',3,'4HGAH51ZXON169281','Black',NULL,NULL),('OD33B7770',1,'4HGAH51ZXON069281','Red',NULL,NULL),('OD33B7890',1,'5HGAH51ZXON069281','white',NULL,NULL),('ODO4U3201',2,'5HGAH51ZXON069280','Brown',NULL,NULL),('ODO4U3202',2,'5HGAH51ZXON069285','white',NULL,NULL),('ODO4U3203',3,'5HGAH51KXON069285','Gray',NULL,NULL),('ODO4U3204',1,'5HGAD51KXON069285','Brown',NULL,NULL),('ODO4U3205',1,'5HGAD51KXON3269285','Brown',NULL,NULL),('ODO4U3206',1,'6HGAD51KXON3269285','white',NULL,NULL),('ODO4U3207',2,'6HGAD51KXON3269286','Black',NULL,NULL),('ODO4U3208',3,'6HGAD51KXON3269290','white',NULL,NULL),('ODO4U3209',3,'6HGAD51KXON3269291','Black',NULL,NULL),('ODO4U3210',1,'7HGAD51KXON3269291','Cyan',NULL,NULL),('ODO5A1220',2,'8HGAD51KXON3269291','Gold',NULL,NULL);
/*!40000 ALTER TABLE `tbl_taxi_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_taxies`
--

DROP TABLE IF EXISTS `tbl_taxies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_taxies` (
  `vchTaxiNo` varchar(15) NOT NULL,
  `vchTaxiOwner` varchar(255) DEFAULT NULL,
  `intTaxiModel` int DEFAULT NULL,
  `intTaxiSeater` int DEFAULT NULL,
  `tinTaxiMusic` tinyint(1) DEFAULT NULL,
  `tinTaxiAc` tinyint(1) DEFAULT NULL,
  `intTaxiLugSpace` int DEFAULT NULL,
  `intTaxiAirbags` int DEFAULT NULL,
  `tinTaxiStatus` tinyint(1) DEFAULT '1',
  `dtmTaxiCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtmTaxiUpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`vchTaxiNo`),
  UNIQUE KEY `vchTaxiUid_UNIQUE` (`vchTaxiNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_taxies`
--

LOCK TABLES `tbl_taxies` WRITE;
/*!40000 ALTER TABLE `tbl_taxies` DISABLE KEYS */;
INSERT INTO `tbl_taxies` VALUES ('OD04Z1045','OWNODBHU021',4,4,0,0,100,2,1,'2022-04-29 15:00:11',NULL),('OD04Z1111','OWNODBHU021',3,6,0,0,200,4,1,'2022-04-29 15:00:11',NULL),('OD04Z1245','OWNODBHU021',3,4,0,0,150,0,1,'2022-04-29 15:00:11',NULL),('OD04Z1250','OWNODBHU021',1,4,1,0,100,2,1,'2022-04-29 15:00:11',NULL),('OD04Z1285','OWNODBHU021',5,6,0,1,300,6,1,'2022-04-29 15:00:11',NULL),('OD04Z3245','OWNODBHU021',2,4,1,1,150,4,1,'2022-04-29 15:00:11',NULL),('OD05C1947','OWNODCTC001',5,6,1,1,300,4,1,'2022-04-28 15:05:34',NULL),('OD07C6545','OWNODBHU021',7,6,1,1,300,4,1,'2022-04-29 15:00:11',NULL),('OD08Q5566','OWNODCUT031',2,4,1,0,150,0,1,'2022-04-29 15:16:08',NULL),('OD09G7689','OWNODCUT0331',1,4,1,1,150,2,1,'2022-04-29 15:16:08',NULL),('OD09X4560','OWNODBHU021',1,4,1,1,100,4,1,'2022-04-29 15:00:11',NULL),('OD33B1234','OWNODBHU001',1,4,1,0,100,0,1,'2022-04-28 14:04:18',NULL),('OD33B2345','OWNODBHU001',1,4,1,1,100,2,1,'2022-04-28 14:21:44',NULL),('OD33B3456','OWNODBHU001',2,4,0,1,100,4,1,'2022-04-28 14:21:44',NULL),('OD33B4567','OWNODBHU001',2,4,0,0,150,4,1,'2022-04-28 14:21:44',NULL),('OD33B5678','OWNODBHU001',2,4,1,1,150,2,1,'2022-04-28 14:21:44',NULL),('OD33B6789','OWNODBHU001',3,6,1,0,300,2,1,'2022-04-28 14:21:44',NULL),('OD33B7770','OWNODBHU021',2,4,1,1,100,0,1,'2022-04-29 15:00:11',NULL),('OD33B7890','OWNODBHU001',3,9,0,1,300,0,1,'2022-04-28 14:21:44',NULL),('ODO4U3201','OWNODCUT033',1,4,0,0,100,0,1,'2022-04-29 15:16:08',NULL),('ODO4U3202','OWNODCUT033',2,4,1,1,150,2,1,'2022-04-29 15:16:08',NULL),('ODO4U3203','OWNODCUT033',3,4,1,1,200,0,1,'2022-04-29 15:16:08',NULL),('ODO4U3204','OWNODCUT033',4,4,0,0,150,0,1,'2022-04-29 15:16:08',NULL),('ODO4U3205','OWNODCUT033',5,6,1,1,300,6,1,'2022-04-29 15:16:08',NULL),('ODO4U3206','OWNODCUT033',7,6,1,1,300,4,1,'2022-04-29 15:16:08',NULL),('ODO4U3207','OWNODCUT033',8,6,1,0,300,0,1,'2022-04-29 15:16:08',NULL),('ODO4U3208','OWNODCUT033',4,4,1,1,150,0,1,'2022-04-29 15:16:08',NULL),('ODO4U3209','OWNODCUT033',2,4,1,1,100,2,1,'2022-04-29 15:16:08',NULL),('ODO4U3210','OWNODCUT033',1,4,0,1,100,0,1,'2022-04-29 15:16:08',NULL),('ODO5A1220','OWNODBHU021',6,6,1,1,300,6,1,'2022-04-29 15:00:11',NULL);
/*!40000 ALTER TABLE `tbl_taxies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_vehicle_models`
--

DROP TABLE IF EXISTS `tbl_vehicle_models`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_vehicle_models` (
  `intVehModel` int NOT NULL AUTO_INCREMENT,
  `vchVehModelName` varchar(255) DEFAULT NULL,
  `intVehModelType` int DEFAULT NULL,
  `tinVehModelStatus` tinyint(1) DEFAULT '1',
  `dtmVehModelCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtmVehModelUpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`intVehModel`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_vehicle_models`
--

LOCK TABLES `tbl_vehicle_models` WRITE;
/*!40000 ALTER TABLE `tbl_vehicle_models` DISABLE KEYS */;
INSERT INTO `tbl_vehicle_models` VALUES (1,'Tata Indigo',1,1,'2022-04-28 14:14:52',NULL),(2,'Honda Amaze',1,1,'2022-04-28 14:14:52',NULL),(3,'Hyundai Xcent',1,1,'2022-04-28 14:14:52',NULL),(4,'Mahindra Verito',1,1,'2022-04-28 14:14:52',NULL),(5,'Toyota Innova',2,1,'2022-04-28 14:14:52',NULL),(6,'Toyota Innova',2,1,'2022-04-28 14:14:52',NULL),(7,'Chevrolet Tavera',2,1,'2022-04-28 14:14:52',NULL),(8,'Mahindra Scorpio',2,1,'2022-04-28 14:14:52',NULL),(9,'Tata Ace',3,1,'2022-04-28 14:38:33',NULL);
/*!40000 ALTER TABLE `tbl_vehicle_models` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_vehicle_subtypes`
--

DROP TABLE IF EXISTS `tbl_vehicle_subtypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_vehicle_subtypes` (
  `intVehSubType` int NOT NULL AUTO_INCREMENT,
  `vchVehSubTypeName` varchar(255) DEFAULT NULL,
  `intVehSubTypeId` int DEFAULT NULL,
  `tinVehSubTypeStatus` tinyint(1) DEFAULT '1',
  `dtmVehSubTypeCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtmVehSubTypeUpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`intVehSubType`),
  KEY `intVehType_idx` (`intVehSubTypeId`),
  CONSTRAINT `intVehType` FOREIGN KEY (`intVehSubTypeId`) REFERENCES `tbl_vehicle_types` (`intVehType`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_vehicle_subtypes`
--

LOCK TABLES `tbl_vehicle_subtypes` WRITE;
/*!40000 ALTER TABLE `tbl_vehicle_subtypes` DISABLE KEYS */;
INSERT INTO `tbl_vehicle_subtypes` VALUES (1,'SEDAN',1,1,'2022-04-25 17:26:59',NULL),(2,'SUV',1,1,'2022-04-25 17:26:59',NULL),(3,'Mini Truck',2,1,'2022-04-25 17:26:59',NULL);
/*!40000 ALTER TABLE `tbl_vehicle_subtypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_vehicle_types`
--

DROP TABLE IF EXISTS `tbl_vehicle_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_vehicle_types` (
  `intVehType` int NOT NULL AUTO_INCREMENT,
  `vchVehTypeName` varchar(255) DEFAULT NULL,
  `tinVehTypeStatus` tinyint(1) DEFAULT '1',
  `dtmVehTypeCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtmVehTypeUpdatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`intVehType`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_vehicle_types`
--

LOCK TABLES `tbl_vehicle_types` WRITE;
/*!40000 ALTER TABLE `tbl_vehicle_types` DISABLE KEYS */;
INSERT INTO `tbl_vehicle_types` VALUES (1,'Car',1,'2022-04-25 17:19:07',NULL),(2,'Truck',1,'2022-04-25 17:19:07',NULL);
/*!40000 ALTER TABLE `tbl_vehicle_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-02 13:01:13
