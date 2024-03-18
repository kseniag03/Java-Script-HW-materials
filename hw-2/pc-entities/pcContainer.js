import Case from './case.js';
import CPU from './cpu.js';
import CPUCooler from './cpu-cooler.js';
import InternalHardDrive from './internal-hard-drive.js';
import Memory from './memory.js';
import Motherboard from './motherboard.js';
import PowerSupply from './power-supply.js';
import VideoCard from './video-card.js';

export default class PcContainer {
    constructor() {
        this.caseList = Case.json.map(data => new Case(
            data.name,
            data.price,
            data.type,
            data.color,
            data.psu,
            data.side_panel,
            data.external_volume,
            data.internal_35_bays
        ));
        this.cpuList = CPU.json.map(data => new CPU(
            data.name,
            data.price,
            data.core_count,
            data.core_clock,
            data.boost_clock,
            data.tdp,
            data.graphics,
            data.smt
        ));
        this.cpuCoolerList = CPUCooler.json.map(data => new CPUCooler(
            data.name,
            data.price,
            data.rpm,
            data.noise_level,
            data.color,
            data.size
        ));
        this.internalHardDriveList = InternalHardDrive.json.map(data => new InternalHardDrive(
            data.name,
            data.price,
            data.capacity,
            data.price_per_gb,
            data.type,
            data.cache,
            data.form_factor,
            data.interface
        ));
        this.memoryList = Memory.json.map(data => new Memory(
            data.name,
            data.price,
            data.speed,
            data.modules,
            data.price_per_gb,
            data.color,
            data.first_word_latency,
            data.cas_latency
        ));
        this.motherboardList = Motherboard.json.map(data => new Motherboard(
            data.name,
            data.price,
            data.socket,
            data.form_factor,
            data.max_memory,
            data.memory_slots,
            data.color
        ));
        this.powerSupplyList = PowerSupply.json.map(data => new PowerSupply(
            data.name,
            data.price,
            data.type,
            data.efficiency,
            data.wattage,
            data.modular,
            data.color
        ));
        this.videoCardList = VideoCard.json.map(data => new VideoCard(
            data.name,
            data.price,
            data.chipset,
            data.memory,
            data.core_clock,
            data.boost_clock,
            data.color,
            data.length
        ));
        // can be extended...
    }

    returnPcBuildFromFirstElements() {
        const totalCost = this.caseList[0].price +
                this.cpuList[0].price +
                this.cpuCoolerList[0].price +
                this.internalHardDriveList[0].price +
                this.memoryList[0].price +
                this.motherboardList[0].price +
                this.powerSupplyList[0].price +
                this.videoCardList[0].price;

        const build = {
            build: {
                case: this.caseList[0].name,
                cpu: this.cpuList[0].name,
                cpuCooler: this.cpuCoolerList[0].name,
                internalHardDrive: this.internalHardDriveList[0].name,
                memory: this.memoryList[0].name,
                motherboard: this.motherboardList[0].name,
                powerSupply: this.powerSupplyList[0].name,
                videoCard: this.videoCardList[0].name
            },
            totalCost: totalCost
        }
    
        return build;
    }
    
    returnPcBuildByCriteria(criteria) {
        const totalCost = this.caseList[1].price +
                this.cpuList[1].price +
                this.cpuCoolerList[1].price +
                this.internalHardDriveList[1].price +
                this.memoryList[1].price +
                this.motherboardList[1].price +
                this.powerSupplyList[1].price +
                this.videoCardList[1].price;

        const build = {
            build: {
                case: this.caseList[1].name,
                cpu: this.cpuList[1].name,
                cpuCooler: this.cpuCoolerList[1].name,
                internalHardDrive: this.internalHardDriveList[1].name,
                memory: this.memoryList[1].name,
                motherboard: this.motherboardList[1].name,
                powerSupply: this.powerSupplyList[1].name,
                videoCard: this.videoCardList[1].name
            },
            totalCost: totalCost,
            maxBudget: null,
            criteria: criteria
        }
    
        // criteria algo
    
        return build;
    }
    
    returnPcBuildByBudget(maxBudget) {
        const build = {
            build: {
                case: null,
                cpu: null,
                cpuCooler: null,
                internalHardDrive: null,
                memory: null,
                motherboard: null,
                powerSupply: null,
                videoCard: null
            },
            totalCost: 0,
            maxBudget: maxBudget,
            criteria: null
        };
    
        let remainingBudget = maxBudget;
    
        const componentLists = [
            this.caseList,
            this.cpuList,
            this.cpuCoolerList,
            this.internalHardDriveList,
            this.memoryList,
            this.motherboardList,
            this.powerSupplyList,
            this.videoCardList];

        componentLists.forEach(componentList => {
            const availableComponents = componentList.filter(component => component.price !== null && component.price <= remainingBudget);
            if (availableComponents.length > 0) {
                availableComponents.sort((a, b) => a.price - b.price);
                const selectedComponent = availableComponents[0];
                const componentType = Object.keys(build.build).find(key => build.build[key] === null);
                build.build[componentType] = selectedComponent.name;
                build.totalCost += selectedComponent.price;
                remainingBudget -= selectedComponent.price;
            }
        });
    
        return build;
    }    

    returnPcBuildByBudgetAndCriteria(maxBudget, criteria) {
        const build = {
            build: {
                case: null,
                cpu: null,
                cpuCooler: null,
                internalHardDrive: null,
                memory: null,
                motherboard: null,
                powerSupply: null,
                videoCard: null
            },
            totalCost: 0,
            maxBudget: maxBudget,
            criteria: criteria
        }
    
        let remainingBudget = maxBudget;

        const componentLists = [
            this.caseList,
            this.cpuList,
            this.cpuCoolerList,
            this.internalHardDriveList,
            this.memoryList,
            this.motherboardList,
            this.powerSupplyList,
            this.videoCardList];

        componentLists.forEach(componentList => {
            const availableComponents = componentList.filter(component => component.price !== null && component.price <= remainingBudget);
            if (availableComponents.length > 0) {
                availableComponents.sort((a, b) => a.price - b.price);
                const selectedComponent = availableComponents[0];
                const componentType = Object.keys(build.build).find(key => build.build[key] === null);
                build.build[componentType] = selectedComponent.name;
                build.totalCost += selectedComponent.price;
                remainingBudget -= selectedComponent.price;
            }
        });
     
        // criteria algo
    
        return build;
    }    
}
