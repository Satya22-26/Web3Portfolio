// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <=0.9.0;
//0x38B7FDE567348C9fffa8e672FDCeC0A26356D5c4
contract Portfolio{
    struct Project{
        uint id;
        string name;
        string descrip;
        string imgLink;
        string githubLink;
    }
    struct Education{
        uint id;
        string date;
        string degree;
        string institution;
        string knowledgeAcquired;
    }
    Project[5] public projects;
    Education[3] public educations;

    string public imageLink="QmVbGpsxrainrrKgDDPSbWaMYGzwcwZaZSkoNV2Li22H1f";
    string public  description="I am currently pursuing a B.Tech in Information Technology at NIT Raipur, graduating in 2026. I am passionate about frontend development and data structures and algorithms, having won the CodeUtsava 7.0 Problem Statement.";
    string public resumeLink="QmXjydkfH3KBXT1wrUNC1eVk5uxQBh8Rr6ymrC1G9YuxtW";
    uint public leetcodeRating=1670;
    
    uint projectCount;
    uint educationCount;
    address public manager;

    constructor(){
        manager=msg.sender;
    }
    modifier onlyManager(){
        require(manager==msg.sender,"You are not the admin");
        _;
    }
    //add , change and show projects
    function insertProject(string calldata _name,string calldata _descrip,string calldata _imgLink,string calldata _githubLink) external {
         require(projectCount<5,"Only 5 projects allowed");
         projects[projectCount] = Project(projectCount,_name,_descrip,_imgLink,_githubLink);
         projectCount++;
    }
    function changeProject(string calldata _name,string calldata _descrip,string calldata _imgLink,string calldata _githubLink,uint _projectCount) external{
       require(_projectCount>=0 && _projectCount<5,"Only 5 projects allowed");
       projects[_projectCount] = Project(_projectCount,_name,_descrip,_imgLink,_githubLink);
  }
    function allProjects() external view returns(Project[5] memory){
        return projects;
    }

    //add , change and show education details

    function insertEducation(string calldata _date,string calldata _degree,string calldata _instution,string calldata _knowledgeAcquired) external  onlyManager{
     require(educationCount<3,"Only 3 education details allowed");
     educations[educationCount]=Education(educationCount,_date,_degree,_instution,_knowledgeAcquired);
     educationCount++;
    }

  function changeEducation(string calldata _date,string calldata _degree,string calldata _instution,string calldata _knowledgeAcquired,uint _eduCount) external onlyManager{
      require(_eduCount>=0 && _eduCount<3,"Invalid educationCount");
      educations[_eduCount]=Education(_eduCount,_date,_degree,_instution,_knowledgeAcquired);
  }

    function allEductationDetails() external view returns(Education[3] memory){
      return educations;
  }

  function changeDescription(string calldata _description) external{
      description=_description;
  }

    function changeResumeLink(string calldata _resumeLink) external onlyManager{
      resumeLink=_resumeLink;
  }
     function changeImageLink(string calldata _imageLink) external onlyManager{
      imageLink=_imageLink;
  }

  function changeLeetcodeRating(uint _leetcodeRating) external onlyManager{
    leetcodeRating=_leetcodeRating;
  }

  function donate() public payable{
      payable(manager).transfer(msg.value);
  }

}