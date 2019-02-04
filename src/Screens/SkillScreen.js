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
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import cUser  from '../Classes/CurrentUser';


    export default class SkillScreen extends React.Component {	
		static 	navigationOptions = {
			headerTitle:
			<View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
				<Image source={require('../../assets/osrs.png')}
				style={{ maxHeight: 60, maxWidth: 130}} />
				<Text> Skills Screen </Text>		
			</View>,
			
		};	

        constructor(props) {
            super(props);
            this.state = {
                stats: {},
                username: 'Xitejames'
            };
            this.stats = cUser.resetCurrent()
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

				<ImageBackground
					source={require('../../assets/Skill_Icons/Inventory.png')}
					style={styles.imgBackground}
					resizeMode="stretch"
				>
					<View
						style={{
							height: 110,
							flexDirection: 'row',
							justifyContent: 'space-around',
							marginTop: 30
						}}
					>
						<TouchableOpacity style={styles.statItem}>
							<Image source={require('../../assets/Skill_Icons/Attack.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Attack</Text>
							<Text style={styles.statText}>Level:{this.stats.playerStats[1].Level}</Text>
							<Text style={styles.statText}>Rank:{this.stats.playerStats[1].Rank}</Text>
							<Text style={styles.statText}>XP:{this.stats.playerStats[1].XP}</Text>
						</TouchableOpacity>
					
                    <TouchableOpacity style={styles.statItem}>
							<Image source={require('../../assets/Skill_Icons/Hitpoints.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Hitpoints</Text>
							<Text style={styles.statText}>Level:{this.stats.playerStats[4].Level}</Text>
							<Text style={styles.statText}>Rank:{this.stats.playerStats[4].Rank}</Text>
							<Text style={styles.statText}>XP:{this.stats.playerStats[4].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Mining')}>
							<Image source={require('../../assets/Skill_Icons/Mining.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Mining</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[15].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[15].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[15].XP}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}>
							<Image source={require('../../assets/Skill_Icons/Strength.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Strength</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[3].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[3].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[3].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Agility')}>
							<Image source={require('../../assets/Skill_Icons/Agility.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Agility</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[17].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[17].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[17].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Smithing')}>
							<Image source={require('../../assets/Skill_Icons/Smithing.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Smithing</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[14].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[14].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[14].XP}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}>
							<Image source={require('../../assets/Skill_Icons/Defence.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Defence</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[2].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[2].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[2].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Herblore')}>
							<Image source={require('../../assets/Skill_Icons/Herblore.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Herblore</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[16].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[16].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[16].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Fishing')}>
							<Image source={require('../../assets/Skill_Icons/Fishing.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Fishing</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[11].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[11].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[11].XP}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
						<TouchableOpacity style={styles.statItem}>
							<Image source={require('../../assets/Skill_Icons/Ranged.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Ranged</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[4].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[4].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[4].XP}</Text>
						</TouchableOpacity>						
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Thieving')}>
							<Image source={require('../../assets/Skill_Icons/Thieving.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Thieving</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[19].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[19].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[19].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Cooking')}>
							<Image source={require('../../assets/Skill_Icons/Cooking.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Cooking</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[12].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[12].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[12].XP}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
					<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Prayer')}>
							<Image source={require('../../assets/Skill_Icons/Prayer.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Prayer</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[6].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[6].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[6].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Crafting')}>
							<Image source={require('../../assets/Skill_Icons/Crafting.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Crafting</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[13].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[13].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[13].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Firemaking')}>
							<Image
								source={require('../../assets/Skill_Icons/Firemaking.png')}
								style={{ maxHeight: 50, maxWidth: 50 }}
							/>
							<Text style={styles.statText}>Firemaking</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[8].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[8].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[8].XP}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
					<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Magic')}>
							<Image source={require('../../assets/Skill_Icons/Magic.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Magic</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[7].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[7].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[7].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Fletching')}>
							<Image source={require('../../assets/Skill_Icons/Fletching.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Fletching</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[10].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[10].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[10].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Woodcutting')}>
							<Image
								source={require('../../assets/Skill_Icons/Woodcutting.png')}
								style={{ maxHeight: 50, maxWidth: 50 }}
							/>
							<Text style={styles.statText}>Woodcutting</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[9].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[9].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[9].XP}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.statBar}>
					<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Runecrafting')}>
							<Image
								source={require('../../assets/Skill_Icons/Runecrafting.png')}
								style={{ maxHeight: 50, maxWidth: 50 }}
							/>
							<Text style={styles.statText}>Runecrafting</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[21].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[21].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[21].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}>
							<Image source={require('../../assets/Skill_Icons/Slayer.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Slayer</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[19].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[19].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[19].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Farming')}>
							<Image source={require('../../assets/Skill_Icons/Farming.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Farming</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[20].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[20].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[20].XP}</Text>
						</TouchableOpacity>    
                	</View>   
					<View style={styles.statBar}>
					<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Construction')}>
							<Image source={require('../../assets/Skill_Icons/Construction.png')} style={{ maxHeight: 50, maxWidth: 50 }}/>
							<Text style={styles.statText}>Construction</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[22].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[22].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[22].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}
                        onPress={() => this.props.navigation.navigate('Hunter')}>
							<Image source={require('../../assets/Skill_Icons/Hunter.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>Hunter</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[23].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[23].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[23].XP}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statItem}>
							<Image source={require('../../assets/Skill_Icons/Skills.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
							<Text style={styles.statText}>TotalLevel</Text>
							<Text style={styles.statText}>Level: {this.stats.playerStats[0].Level}</Text>
							<Text style={styles.statText}>Rank: {this.stats.playerStats[0].Rank}</Text>
							<Text style={styles.statText}>XP: {this.stats.playerStats[0].XP}</Text>
						</TouchableOpacity>    
                	</View>  
				</ImageBackground>


				<View style={styles.tabBar}>

					<TouchableOpacity style={styles.tabItem}
                        onPress={() => this.props.navigation.navigate('Construction')}>
						<Icon name="home" size={30} />
						<Text style={styles.tabTitle}>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}>
						<Icon name="whatshot" size={30} />
						<Text style={styles.tabTitle}>Popular</Text>
					</TouchableOpacity>
				</View>
                
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#625341'
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
	tabBar: {
		height: 60,
		borderTopWidth: 0.5,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		paddingTop: 4,
		fontSize: 11,
		color: '#3c3c3c'
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
		color: '#FF0'
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

});
