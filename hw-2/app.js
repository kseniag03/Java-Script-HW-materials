// app.js

import PcContainer from './pc-entities/pcContainer.js';

export default function appPcCraft(appContainerId) {
    const appContainer = document.getElementById(appContainerId);
    const pcContainer = new PcContainer();
    const componentLists = {
        'case': pcContainer.caseList,
        'cpu': pcContainer.cpuList,
        'cpuCooler': pcContainer.cpuCoolerList,
        'internalHardDrive': pcContainer.internalHardDriveList,
        'memory': pcContainer.memoryList,
        'motherboard': pcContainer.motherboardList,
        'powerSupply': pcContainer.powerSupplyList,
        'videoCard': pcContainer.videoCardList
    };
    
    var selectedMaxBudget = 0;
    var selectedCriteria = [];
    var selectedManualBuild = {
        build: {
            case: null,
            cpu: null,
            cpuCooler: null,
            internalHardDrive: null,
            memory: null,
            motherboard: null,
            powerSupply: null,
            videoCard: null,
        },
        totalCost: 0
    };
    var buildHistory = [
        {
            buildNumber: 1,
            buildDate: new Date().toLocaleString(),
            buildData: pcContainer.returnPcBuildFromFirstElements()
        },
        {
            buildNumber: 2,
            buildDate: new Date().toLocaleString(),
            buildData: pcContainer.returnPcBuildByCriteria([])
        }
    ];

    
    function submitCriteria() {
        document.querySelectorAll('.dropdown-content input[type="checkbox"]').forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    selectedCriteria.push(checkbox.nextSibling.textContent);
                } else {
                    const index = selectedCriteria.indexOf(checkbox.nextSibling.textContent);
                    if (index !== -1) {
                        selectedCriteria.splice(index, 1);
                    }
                }
            });
        });
    }

    function updateTotalCost() {
        let totalCost = 0;
    
        Object.values(selectedManualBuild.build).forEach(componentName => {
            if (componentName && componentLists.hasOwnProperty(componentName)) {
                totalCost += componentLists[componentName].price;
            }
        });
    
        selectedManualBuild.totalCost = totalCost;
    }     

    function updateBuild(componentName, componentValue) {
        selectedManualBuild.build[componentName] = componentValue;
    
        updateTotalCost();
    }
    
    function submitManualComponents() {
        document.querySelectorAll('.dropdown-content input[type="radio"]').forEach(function(radio) {
            radio.addEventListener('change', function() {
                const componentName = radio.getAttribute('name');
                const componentValue = radio.nextSibling.textContent;
                updateBuild(componentName, componentValue);
            });
        });
    }

    function updateHistoryContent() {
        const historyList = document.querySelector('.history-list');
        historyList.innerHTML = '';
    
        buildHistory.forEach(build => {
            const buildItem = document.createElement('li');
            const buildTitle = document.createElement('div');
    
            buildTitle.classList.add('build-title');
            buildTitle.textContent = `Сборка №${build.buildNumber}, Дата: ${build.buildDate}`;
    
            buildTitle.addEventListener('click', () => {
                const existingBuildDataField = buildItem.querySelector('.build-data');
                if (existingBuildDataField) {
                    buildItem.removeChild(existingBuildDataField);
                } else {
                    const buildDataField = document.createElement('textarea');
                    buildDataField.classList.add('build-data');
                    buildDataField.readOnly = true;
                    buildDataField.value = JSON.stringify(build.buildData, null, 2);
                    buildItem.appendChild(buildDataField);
                }
            });
            buildItem.appendChild(buildTitle);
            historyList.appendChild(buildItem);
        });
    }
    
    function selectPcBuild() {
        if (selectedMaxBudget > 0 && selectedCriteria.length > 0) {
            return pcContainer.returnPcBuildByBudgetAndCriteria(selectedMaxBudget, selectedCriteria);
        } else if (selectedMaxBudget > 0) {
            return pcContainer.returnPcBuildByBudget(selectedMaxBudget);
        } else if (selectedCriteria.length > 0) {
            return pcContainer.returnPcBuildByCriteria(selectedCriteria);
        }
        return pcContainer.returnPcBuildFromFirstElements();
    }    

    function addBuildToHistory(selectedPcBuild) {
        const newBuild = {
            buildNumber: buildHistory.length + 1,
            buildDate: new Date().toLocaleString(),
            buildData: selectedPcBuild
        };
        buildHistory.push(newBuild);
        updateHistoryContent();
    }  

    function showPcBuild(selectedPcBuild, parentElement) {
        const existingBuildDataField = parentElement.querySelector('.pc-build-data');
    
        if (existingBuildDataField) {
            const existingBuildData = existingBuildDataField.value;
            const newBuildData = JSON.stringify(selectedPcBuild, null, 2);
    
            if (existingBuildData === newBuildData) {
                parentElement.removeChild(existingBuildDataField);
                return;
            }
    
            existingBuildDataField.value = newBuildData;
            addBuildToHistory(selectedPcBuild);
        } else {
            const buildDataField = document.createElement('textarea');
            buildDataField.classList.add('pc-build-data');
            buildDataField.readOnly = true;
            buildDataField.value = JSON.stringify(selectedPcBuild, null, 2);
    
            if (buildHistory.length > 0) {
                const lastBuildData = buildHistory[buildHistory.length - 1].buildData;

                if (JSON.stringify(selectedPcBuild) === JSON.stringify(lastBuildData)) {
                    parentElement.appendChild(buildDataField);
                    return;
                }
            }
    
            addBuildToHistory(selectedPcBuild);
            parentElement.appendChild(buildDataField);
        }
    }

    function createSaveBuildButton() {
        const saveBuildButton = document.createElement('button');
        saveBuildButton.textContent = 'Save build';
        saveBuildButton.classList.add('save-build-button');
    
        saveBuildButton.onclick = function () {
            const buildDataField = document.querySelector('.pc-build-data');
            if (!buildDataField) return;
    
            const buildData = buildDataField.value;
            if (!buildData) return;
    
            const fileName = 'build.json';
            const fileData = new Blob([buildData], { type: 'application/json' });
    
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(fileData);
            downloadLink.download = fileName;
    
            downloadLink.click();
        };
    
        return saveBuildButton;
    }    

    function createHomeContent(homeContent) {
        const parentElement = document.getElementById(homeContent.id);

        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('button-wrapper');
        const getBuildButton = document.createElement('button');
        getBuildButton.textContent = 'Get build';
        buttonWrapper.appendChild(getBuildButton);
        parentElement.appendChild(buttonWrapper);
        const saveBuildButton = createSaveBuildButton();
        buttonWrapper.appendChild(saveBuildButton);
        getBuildButton.onclick = function () {
            showPcBuild(selectPcBuild(), buttonWrapper);
        };

        const budgetWrapper = document.createElement('div');
        budgetWrapper.classList.add('budget-wrapper');
        const budgetInput = document.createElement('input');
        budgetInput.type = 'number';
        budgetInput.placeholder = 'Максимальный бюджет';
        budgetInput.addEventListener('input', function() {
            const value = parseFloat(budgetInput.value);
            if (!isNaN(value)) {
                selectedMaxBudget = value;
            } else {
                selectedMaxBudget = 0;
            }
        });
        budgetWrapper.appendChild(budgetInput);
        parentElement.appendChild(budgetWrapper);

        const button = document.createElement('button');
        button.className = "red-button";
        button.textContent = 'Для какой деятельности нужен ПК';
        button.classList.add('dropbtn');
        parentElement.appendChild(button);

        const dropdownContent = document.createElement('div');

        dropdownContent.classList.add('dropdown-content');
        parentElement.appendChild(dropdownContent);

        const criteria = [
            'Разработка игр',
            '3D моделирование',
            'Монтаж видео',
            'Обучение ИИ моделей',
            'Рендеринг и анимация',
            'Научные вычисления',
            'Виртуальная реальность',
            'Архитектурное моделирование и проектирование',
            'Аудиообработка и музыкальное производство',
            'Большие вычислительные задачи',
            'Графический дизайн и допечатная подготовка',
            'Автоматизация и робототехника',
            'Игры с высокими системными требованиями',
            'Игры со средними системными требованиями',
            'Многопользовательские онлайн-игры',
            'Стриминг и запись игрового процесса',
            'Эмуляция игровых консолей'
        ];

        criteria.forEach(function (criterion) {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');

            checkbox.type = 'checkbox';
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(criterion));
            dropdownContent.appendChild(label);
        });

        button.addEventListener('click', function () {
            dropdownContent.classList.toggle('show');
        });

        submitCriteria();
    }

    function createManualContent(manualContent) {
        const parentElement = document.getElementById(manualContent.id);

        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('button-wrapper');
        const getBuildButton = document.createElement('button');
        getBuildButton.textContent = 'Get build';
        buttonWrapper.appendChild(getBuildButton);
        parentElement.appendChild(buttonWrapper);
        const saveBuildButton = createSaveBuildButton();
        buttonWrapper.appendChild(saveBuildButton);
        getBuildButton.onclick = function () {
            showPcBuild(selectedManualBuild, buttonWrapper);
        };

        document.addEventListener('click', function(event) {
            const dropdowns = document.querySelectorAll('.dropdown-wrapper');
            dropdowns.forEach(function(dropdown) {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                if (dropdownContent.classList.contains('show')) {
                    if (!dropdown.contains(event.target)) {
                        dropdownContent.classList.remove('show');
                    }
                }
            });
        });

        function createDropdown(componentName) {
            const dropdownWrapper = document.createElement('div');
            dropdownWrapper.classList.add('dropdown-wrapper');
    
            const dropdownButton = document.createElement('button');
            dropdownButton.className = 'dropdown-button';
            dropdownButton.textContent = `Выберите ${componentName}`;
            dropdownButton.onclick = () => {
                const dropdownContent = dropdownWrapper.querySelector('.dropdown-content');
                dropdownContent.classList.toggle('show');
            };
    
            const dropdownContent = document.createElement('div');
            dropdownContent.classList.add('dropdown-content');
    
            const radioGroup = document.createElement('div');
            componentLists[componentName].forEach(component => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = componentName;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(component.name));
                radioGroup.appendChild(label);
            });
    
            dropdownContent.appendChild(radioGroup);
            dropdownWrapper.appendChild(dropdownButton);
            dropdownWrapper.appendChild(dropdownContent);
    
            return dropdownWrapper;
        }

        Object.keys(componentLists).forEach(componentName => {
            parentElement.appendChild(createDropdown(componentName));
        });
        
        submitManualComponents();
    }

    function createHistoryContent(historyContent) {
        const parentElement = document.getElementById(historyContent.id);
        const historyTitle = document.createElement('h2');
        historyTitle.textContent = 'История';
        parentElement.appendChild(historyTitle);
    
        const historyList = document.createElement('ul');
        historyList.classList.add('history-list');
        parentElement.appendChild(historyList);
    
        updateHistoryContent();
    }    

    function clearBuildHistory() {
        const historyList = document.querySelector('.history-list');
        if (historyList) {
            while (historyList.firstChild) {
                historyList.removeChild(historyList.firstChild);
            }
        }
    }

    const tabs = document.createElement('div');
    tabs.className = 'tabs';
    appContainer.appendChild(tabs);

    const tabNames = ['Главная', 'Ручной выбор', 'История'];
    tabNames.forEach(tabName => {
        const tabButton = document.createElement('button');
        tabButton.className = 'tabbutton';
        tabButton.textContent = tabName;
        tabs.appendChild(tabButton);
    });

    const tabContents = document.createElement('div');
    tabContents.className = 'tabcontents';
    appContainer.appendChild(tabContents);

    const homeContent = document.createElement('div');
    homeContent.id = 'homeContent';
    homeContent.className = 'tabcontent active';
    tabContents.appendChild(homeContent);
    createHomeContent(homeContent);

    const manualContent = document.createElement('div');
    manualContent.id = 'manualContent';
    manualContent.className = 'tabcontent';
    tabContents.appendChild(manualContent);
    createManualContent(manualContent);

    const historyContent = document.createElement('div');
    historyContent.id = 'historyContent';
    historyContent.className = 'tabcontent';
    tabContents.appendChild(historyContent);
    createHistoryContent(historyContent);

    const tabButtons = document.querySelectorAll('.tabbutton');
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tabcontent').forEach(content => {
                content.classList.remove('active');
            });

            button.classList.add('active');
            tabContents.children[index].classList.add('active');
        });
    });

    window.addEventListener('beforeunload', function (event) {
        clearBuildHistory();
    });
}
