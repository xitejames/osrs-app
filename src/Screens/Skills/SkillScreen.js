import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableOpacity, 
    TextInput, 
    ScrollView, 
	ImageBackground,
	FlatList,
 } from 'react-native';
import cUser  from '../../Classes/CurrentUser';
import StatIcon from '../../Components/Stat_icon/StatIcon'
import Icon from 'react-native-vector-icons/MaterialIcons';

    export default class SkillScreen extends React.Component {	

        constructor(props) {
            super(props);
            this.state = {
                stats: {},
                username: 'Xitejames'
            };
			this.stats = cUser.resetCurrent()
			cUser.setStats(cUser.resetCurrent())
        }
        onPress = () => {
            this.searchUser(this.state.username);
        };
    
        resetCurrent(){        
            this.setState({ stats: cUser.resetCurrent });
        };
    
        searchUser = async (user) => {
            {this.resetCurrent}
            let hsUrl = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';
            return fetch(`${hsUrl}${user}`).then((response) => response.text()).then((body) => {
                //Removes blank spaces from pulled data
                let changed = (body = body.replace(/\n/g, ','));
                //places data into array
                let res = changed.split(',');
                //for statement to populate json
                for (var i = 0; i < 31; i++) {
                    if (i <= 23) {
                        let spliced = res.splice(0, 3);
                        this.stats.playerStats[i].Rank = spliced[0];
                        this.stats.playerStats[i].Level = spliced[1];
                        this.stats.playerStats[i].XP = spliced[2];
                    } else if (i <= 24) {
                        let spliced = res.splice(0, 4);
                        this.stats.playerStats[i].catch1 = spliced[0];
                        this.stats.playerStats[i].catch2 = spliced[1];
                        this.stats.playerStats[i].catch3 = spliced[2];
                        this.stats.playerStats[i].catch4 = spliced[3];
                    } else {
                        let spliced = res.splice(0, 2);
                        this.stats.playerStats[i].Rank = spliced[0];
                        this.stats.playerStats[i].Score = spliced[1];
                    }
                }
                this.stats.playerStats.splice(24, 1);
                this.setState({ stats: this.stats.playerStats });
                cUser.setStats(this.stats);  
            }).catch(function(err) {
                console.log(err)
            });
		};

		testfun(test){
					console.log(test)
		}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.navBar}>				
					<TextInput
						style={{ maxWidth: 150}}
						placeholderTextColor='black'
    				underlineColorAndroid='black'
						onChangeText={(username) => {
							this.setState({ username });
						}}
						value={this.state.username}
						placeholder="Username"
						style={{ minWidth: 250 }}
					/>
					<TouchableOpacity onPress={this.onPress}>
						<Icon name="search" size={30} />
					</TouchableOpacity>
				</View>

				{/* <ImageBackground
					source={require('../../../assets/Skill_Icons/Inventory.png')}
					style={styles.imgBackground}
					resizeMode="stretch"
				> */}
					<View
						style={{
							height: 110,
							flexDirection: 'row',
							justifyContent: 'space-around',
							marginTop: 30
						}}
					>	

						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[1].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[1].Name}
								currentRank={this.stats.playerStats[1].Rank}
								currentLevel={this.stats.playerStats[1].Level}
								currentXP={this.stats.playerStats[1].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[1].Name +'.png'}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[4].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[4].Name}
								currentRank={this.stats.playerStats[4].Rank}
								currentLevel={this.stats.playerStats[4].Level}
								currentXP={this.stats.playerStats[4].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[4].Name +'.png'}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[15].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[15].Name}
								currentRank={this.stats.playerStats[15].Rank}
								currentLevel={this.stats.playerStats[15].Level}
								currentXP={this.stats.playerStats[15].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[1].Name +'.png'}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
					<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[3].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[3].Name}
								currentRank={this.stats.playerStats[3].Rank}
								currentLevel={this.stats.playerStats[3].Level}
								currentXP={this.stats.playerStats[3].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[3].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[17].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[17].Name}
								currentRank={this.stats.playerStats[17].Rank}
								currentLevel={this.stats.playerStats[17].Level}
								currentXP={this.stats.playerStats[17].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[17].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[14].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[14].Name}
								currentRank={this.stats.playerStats[14].Rank}
								currentLevel={this.stats.playerStats[14].Level}
								currentXP={this.stats.playerStats[14].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[14].Name +'.png'}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[2].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[2].Name}
								currentRank={this.stats.playerStats[2].Rank}
								currentLevel={this.stats.playerStats[2].Level}
								currentXP={this.stats.playerStats[2].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[2].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[16].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[16].Name}
								currentRank={this.stats.playerStats[16].Rank}
								currentLevel={this.stats.playerStats[16].Level}
								currentXP={this.stats.playerStats[16].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[16].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[11].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[11].Name}
								currentRank={this.stats.playerStats[11].Rank}
								currentLevel={this.stats.playerStats[11].Level}
								currentXP={this.stats.playerStats[11].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[11].Name +'.png'}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[5].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[5].Name}
								currentRank={this.stats.playerStats[5].Rank}
								currentLevel={this.stats.playerStats[5].Level}
								currentXP={this.stats.playerStats[5].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[5].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[19].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[19].Name}
								currentRank={this.stats.playerStats[19].Rank}
								currentLevel={this.stats.playerStats[19].Level}
								currentXP={this.stats.playerStats[19].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[19].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[12].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[12].Name}
								currentRank={this.stats.playerStats[12].Rank}
								currentLevel={this.stats.playerStats[12].Level}
								currentXP={this.stats.playerStats[12].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[12].Name +'.png'}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[6].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[6].Name}
								currentRank={this.stats.playerStats[6].Rank}
								currentLevel={this.stats.playerStats[6].Level}
								currentXP={this.stats.playerStats[6].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[6].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[13].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[13].Name}
								currentRank={this.stats.playerStats[13].Rank}
								currentLevel={this.stats.playerStats[13].Level}
								currentXP={this.stats.playerStats[13].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[13].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[8].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[8].Name}
								currentRank={this.stats.playerStats[8].Rank}
								currentLevel={this.stats.playerStats[8].Level}
								currentXP={this.stats.playerStats[8].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[8].Name +'.png'}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[7].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[7].Name}
								currentRank={this.stats.playerStats[7].Rank}
								currentLevel={this.stats.playerStats[7].Level}
								currentXP={this.stats.playerStats[7].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[7].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[10].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[10].Name}
								currentRank={this.stats.playerStats[10].Rank}
								currentLevel={this.stats.playerStats[10].Level}
								currentXP={this.stats.playerStats[10].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[10].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[9].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[9].Name}
								currentRank={this.stats.playerStats[9].Rank}
								currentLevel={this.stats.playerStats[9].Level}
								currentXP={this.stats.playerStats[9].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[9].Name +'.png'}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[21].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[21].Name}
								currentRank={this.stats.playerStats[21].Rank}
								currentLevel={this.stats.playerStats[21].Level}
								currentXP={this.stats.playerStats[21].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[21].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[19].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[19].Name}
								currentRank={this.stats.playerStats[19].Rank}
								currentLevel={this.stats.playerStats[19].Level}
								currentXP={this.stats.playerStats[19].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[19].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[20].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[20].Name}
								currentRank={this.stats.playerStats[20].Rank}
								currentLevel={this.stats.playerStats[20].Level}
								currentXP={this.stats.playerStats[20].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[20].Name +'.png'}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[22].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[22].Name}
								currentRank={this.stats.playerStats[22].Rank}
								currentLevel={this.stats.playerStats[22].Level}
								currentXP={this.stats.playerStats[22].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[22].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[23].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[23].Name}
								currentRank={this.stats.playerStats[23].Rank}
								currentLevel={this.stats.playerStats[23].Level}
								currentXP={this.stats.playerStats[23].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[23].Name +'.png'}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate(this.stats.playerStats[0].Name)}>
							<StatIcon							
								currentName={this.stats.playerStats[0].Name}
								currentRank={this.stats.playerStats[0].Rank}
								currentLevel={this.stats.playerStats[0].Level}
								currentXP={this.stats.playerStats[0].XP}
								currentImage={'../../../assets/Skill_Icons/'+ this.stats.playerStats[0].Name +'.png'}
							/>
						</TouchableOpacity>
					</View>
				{/* </ImageBackground> */}


				<View style={styles.tabBar}>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Home')}>			
						<Icon name="home" size={30} />
						<Text style={styles.tabTitle}>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Quest')}>			
						<Icon name="book" size={30} />
						<Text style={styles.tabTitle}>Quests</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Skill')}>			
						<Icon name="show-chart" size={30} />
						<Text style={styles.tabTitle}>Skills</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}
						onPress={() => this.props.navigation.navigate('Exchange')}>			
						<Icon name="shop" size={30} />
						<Text style={styles.tabTitle}>GE prices</Text>
					</TouchableOpacity>
				</View>		
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	navBar: {
		paddingTop: 25,
		height: 100,
		elevation: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	navRight: {
		flexDirection: 'row'
	},
	body: {
		flex: 1
	},
	statBar: {
		height: 110,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	statItem: {
		alignItems: 'center',
		width: 80
	},
	statText: {
		fontSize: 11,
		color: '#000'
	},
	imgBackground: {
		width: '100%',
		height: '100%',
		flex: 1
	},
	homeIcon: {
		flex:1,
		position: 'absolute',
		alignItems: 'flex-end',

	},
	  	
    tabBar: {
		height: 60,
		borderTopWidth: 0.5,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		paddingTop: 4,
		fontSize: 11,
		color: '#000'
	},

});
