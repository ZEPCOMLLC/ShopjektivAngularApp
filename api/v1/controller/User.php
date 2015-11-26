<?php


// GET LIST
$app->get('/user/', 'mw_auth', function () use ($app) {

    $users = ORM::for_table('user')->find_many();

    $response = array();
    foreach ($users as $user) {
        $role = ORM::for_table('role')->find_one($user['role_id']);
        /*            [$user['id']]*/
        $response['data'][$user['id']] = array(
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'last_login' => $user['last_login'],
            'active' => $user['active'],
            'role_id' => $user['role_id'],
            'role' => $role['name']

        );
    }
    echoResponse(200, $response);

});

// GET ONE
$app->get('/user/:id', 'mw_auth', function ($id) use ($app) {


    $user = ORM::for_table('user')->find_one($id);

    $response = array();
    if ($user['id'] != NULL) {
        // $response['data'][$user['id']] = array(
        $role = ORM::for_table('role')->find_one($user['role_id']);

        $response['data'] = array(
            'id' => $user['id'],
            'name'=> $user['name'],
            'email' => $user['email'],
            'password' => $user['password'],
            'active' => $user['active'],
            'last_login' => $user['last_login'],
            'role' => $role['name']
        );

        echoResponse(200, $response);
    } else {
        $response["error"] = true;
        $response["message"] = 'No User found for id=' . $id;
        echoResponse(400, $response);
    }

});


// POST ONE
$app->post('/user/', 'mw_auth', function () use ($app) {

    $response = array();
    $body = $app->request->getBody();
    $json = json_decode($body, true);
    if (isset($json['email']) && isset($json['password']) && isset($json['name'])) {
        $user = ORM::for_table('user')->create();
        $user->set('name', $json['name']);
        $user->set('email', $json['email']);
        $user->set('salt', uniqid(mt_rand(), true));
        $user->set('password', sha1($json['password'] . $user->salt));
        $user->set('role_id', "1");
        $user->set('active', "1");
        $user->set('created', time());
        $user->set('account_id', "1");

        $user->save();

        $response["error"] = false;
        $response["message"] = 'SUCCESS: New User with id=' . $agent['id'] . ' created.';

        $response['data'][$user['id']] = array(
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'last_login' => $user['last_login'],
            'active' => $user['active']
        );

        echoResponse(200, $response);

    }
    else {
        $response["error"] = true;
        $response["message"] = $json;
        echoResponse(400, $response);
    }

});


// UPDATE ONE
$app->put('/user/:id', 'mw_auth', function ($id) use ($app) {

    $response = array();
    $body = $app->request->getBody();
    $json = json_decode($body, true);

    if (isset($json['active'])) {

        $user = ORM::for_table('user')->find_one($id);

        if ($user != NULL && $user['id'] != "") {

            $agent->set('active', $json['active']);
            $agent->save();

            $response["error"] = false;
            $response["message"] = 'SUCCESS: Updated user with id=' . $agent['id'];

            $response['data'][$user['id']] = array(
                'id' => $user['id'],
                'email' => $user['email'],
                'last_login' => $user['last_login'],
                'active' => $user['active']
            );
            echoResponse(200, $response);
        } else {
            $response["error"] = true;
            $response["message"] = 'No user found for id=' . $id;
            echoResponse(400, $response);
        }
    } else {
        $response["error"] = true;
        $response["message"] = 'No or invalid json input!';
        echoResponse(400, $response);
    }

});


// DELETE ONE
$app->delete('/user/:id', 'mw_auth', function ($id) use ($app) {

    $user = ORM::for_table('user')->find_one($id);
    $response = array();

    if ($user['id'] != NULL) {
        $user->delete();

        $response["message"] = 'SUCCESS: Deleted user with id=' . $id;
        echoResponse(200, $response);
    } else {
        $response["error"] = true;
        $response["message"] = 'No user found for id=' . $id;
        echoResponse(400, $response);
    }

});

// GET Roles
$app->get('/role/', 'mw_auth', function () use ($app) {

    $roles = ORM::for_table('role')->find_many();
    $response = array();
    foreach ($roles as $role) {

        /*           */
        $response['data'][$role['id']] = array(
            'id' => $role['id'],
            'name' => $role['name']
        );
    }
    echoResponse(200, $response);

});

?>